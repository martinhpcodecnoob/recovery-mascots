import jwt, { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { SECRET } = process.env
const ACCESS_TOKEN_EXPIRATION = '1d'

export const generateBearerToken = (userId: string): string => {

    if (!SECRET) {
        throw new Error('La variable de entorno SECRET no está definida.');
    }

    const secretKey = SECRET;
    const expiresIn = ACCESS_TOKEN_EXPIRATION;

    const token = jwt.sign({ userId }, secretKey, { expiresIn });
    return `Bearer ${token}`;
};

export const isTokenExpired = (token: string): boolean => {
    try {
        if (!SECRET) {
            throw new Error('La variable de entorno SECRET no está definida.');
        }

        const decodedToken = verify(token, SECRET);

        return false;
    } catch (error: any) {  
        if (error instanceof TokenExpiredError) {
            return true;
        } else if (error instanceof JsonWebTokenError) {
            console.error('Error de decodificación de token:', error.message);
        } else {
            console.error('Error inesperado:', error.message);
        }

        return true;
    }
};

export const decodeToken = (token: string): any | null => {
    try {
        if (!SECRET) {
            throw new Error('La variable de entorno SECRET no está definida.');
        }

        const decodedToken = verify(token, SECRET);
        return decodedToken;
    } catch (error:any) {
        if (error instanceof TokenExpiredError) {
            return true;
        } else if (error instanceof JsonWebTokenError) {
            console.error('Error de decodificación de token:', error.message);
        } else {
            console.error('Error inesperado:', error.message);
        }

        return null;
    }
};