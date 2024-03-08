import { Request, Response } from "express";
import Notification from '../schemas/Notification'
import { notificationSchemaValidation, updateNotificationValidation, deleteNotificationValidation } from "../utils/joi/notification-validator";

export const createNotification = async (req: Request, res: Response) => {
    try {
        const validationResult = notificationSchemaValidation.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Invalid notification data",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Invalid notification data" });
        }

        const { userId, petId, message, view } = validationResult.value;

        const newNotification = new Notification({
            userId,
            petId,
            message,
            view,
        });

        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating notification' });
    }
};

export const getNotifications = async (req: Request, res: Response) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching notifications' });
    }
};

export const updateNotification = async (req: Request, res: Response) => {
    try {
        const validationResult = updateNotificationValidation.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Invalid update data",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Invalid update data" });
        }

        const { id, view } = validationResult.value;
        const updatedNotification = await Notification.findByIdAndUpdate(
            id,
            { $set: { view } },
            { new: true }
        );

        res.status(200).json(updatedNotification);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating notification' });
    }
};

export const deleteNotification = async (req: Request, res: Response) => {
    try {
        const validationResult = deleteNotificationValidation.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Invalid delete data",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Invalid delete data" });
        }

        const { id } = validationResult.value;
        await Notification.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting notification' });
    }
};