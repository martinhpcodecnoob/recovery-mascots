import * as Joi from 'joi';

const validAccountTypes = ["manager", "worker"];

//Falta incluir regex a las contraseñas

export const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    cellphone: Joi.string(),
    dni: Joi.string().required(),
    sex: Joi.string().required(),
    company: Joi.string().required(),
    accountType: Joi.string().valid(...validAccountTypes).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
