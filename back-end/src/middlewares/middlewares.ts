import {Request, Response, NextFunction} from 'express'
import jwt, {VerifyErrors, Secret} from 'jsonwebtoken'
import User from '../schemas/User'
const { SECRET } = process.env

import multer, { Multer } from 'multer';

interface User {
    _id:string
    name:string
    email:string
}

export interface AuthRequest extends Request {
    user?:User
}

export const verifyAccessToken = async(req:AuthRequest, res:Response, next:NextFunction) => {
    
    const authorizationHeader = req.headers.authorization;
    const userIdFromHeader = req.get('X-User-Id');
    
    
    if (!authorizationHeader) {
        return res.status(401).json({message:'Token de acceso no proporcionado'})
    }
    
    if (!userIdFromHeader) {
        return res.status(401).json({message:'No tienes permiso para acceder a esta ruta'})
    }

    if (!authorizationHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Formato de token no válido' });
    }

    const token = authorizationHeader?.substring(7)

    jwt.verify(token, SECRET as Secret, async(err:VerifyErrors | null, decodedToken:any) => {
        if (err) {
            console.log("Error de token ",err);
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({message:'Token de sesion expirado'})
            } else {
                return res.status(401).json({message:'Token de sesion invalido'})
            }
        }

        try {
            const user = await User.findById(decodedToken.userId)
            if (!user) {
                return res.status(404).json({message:"Usuario no encontrado"})
            }

            if (decodedToken.userId !== userIdFromHeader) {
                return res.status(401).json({message:'No tienes permiso para acceder a esta ruta'})
            }
            req.user = {_id:user._id, name:user.name, email:user.email}
            next()
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"Error del servidor",error})
        }
    })
}