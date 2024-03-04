import * as Joi from 'joi';

export const generateQRCodeValidation = Joi.object({
    link: Joi.string().uri().required(),
});