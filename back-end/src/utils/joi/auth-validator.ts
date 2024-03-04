import * as Joi from 'joi';

// const validAccountTypes = ["manager", "worker"];

//Falta incluir regex a las contraseñas

export const registerSchema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    cellPhone: Joi.string(),
    password: Joi.string().required(),
    // sex: Joi.string().required(),
    // company: Joi.string().required(),
    // accountType: Joi.string().valid(...validAccountTypes).required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const adminLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
