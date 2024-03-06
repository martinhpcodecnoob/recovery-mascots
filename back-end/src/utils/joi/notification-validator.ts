import * as Joi from 'joi';

export const notificationSchemaValidation = Joi.object({
    userId: Joi.string().required(),
    petId: Joi.string().required(),
    message: Joi.string().required(),
    view: Joi.boolean().required(),
});

export const updateNotificationValidation = Joi.object({
    id: Joi.string().required(),
    view: Joi.boolean().required(),
});

export const deleteNotificationValidation = Joi.object({
    id: Joi.string().required(),
});