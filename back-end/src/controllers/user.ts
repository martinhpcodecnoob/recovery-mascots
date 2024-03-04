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

export const getUsers = async(req:Request,res:Response) => {
    try {
        const users = await User.find()
        if (!users) {
            return res.status(401).json({message:"No existen usuarios"})
        }
        
        return res.status(200).json({message:"Encontrados",users})
    } catch (error) {
        console.log();
        return res.status(500).json({message:'Error del servidor',error})
    }
}