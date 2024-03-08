import mongoose, { Schema } from "mongoose";
import { NotificationModel } from "../models/notification";

export const notificationSchema: Schema<NotificationModel> = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    petId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    view: {
        type: Boolean,
        required: true,
    },
}, { versionKey: false })


export default mongoose.model<NotificationModel>('Notification', notificationSchema)