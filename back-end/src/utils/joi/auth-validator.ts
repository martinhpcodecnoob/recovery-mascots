import * as Joi from 'joi';

export const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    cellphone: Joi.string(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const adminLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
