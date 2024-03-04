import * as Joi from 'joi';

export const petSchemaValidation = Joi.object({
    name: Joi.string().required(),
    age: Joi.string().allow('').optional(),
    breed: Joi.string().allow('').optional(),
    weight: Joi.number().optional(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    images: Joi.array().items(Joi.string()).required(),
    status: Joi.string().required(),
    userId: Joi.string().allow(null, '').optional(),
});
