import { Request,Response } from "express";
import User from '../schemas/User'

export const createUser = async(req:Request,res:Response) => {
    try {
        const {name,cellphone} = req.body
        const newUser = new User({
            name,
            cellphone
        })

        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
}