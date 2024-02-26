import { Request,Response } from "express";
import Admin from '../schemas/Admin'
import bcrypt from 'bcrypt';

import { adminLoginSchema } from "../utils/joi/auth-validator";
import { generateBearerToken } from "../utils/jwt";

export const createDefaultAdmin = async () => {
    const defaultAdminEmail = 'julioxcc4@gmail.com';
    const defaultAdminPassword = 'hola1234';
  //nombre
    const existingAdmin = await Admin.findOne({ email: defaultAdminEmail });
  
    if (!existingAdmin) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(defaultAdminPassword, saltRounds);
  
      const newAdmin = new Admin({
        email: defaultAdminEmail,
        password: hashedPassword,
      });
  
      await newAdmin.save();
      console.log('Admin creado exitosamente.');
    }
  };

  export const adminLogin = async (req: Request, res: Response) => {
    try {
      const validationResult = adminLoginSchema.validate(req.body, {
        allowUnknown: true,
        stripUnknown: true,
      });
  
      if (validationResult.error) {
        console.error({
          error: "Datos de logeo no válidos",
          details: validationResult.error.details,
        });
        return res.status(400).json({ error: "Datos de logeo no válidos" });
      }
      const { email, password } = validationResult.value;
  
      const existingAdmin = await Admin.findOne(
        { email }
      );
  
      if (!existingAdmin) {
        return res
          .status(404)
          .json({ error: "No hay ningun administrador registrado en la base de datos." });
      }
  
      const passwordMatch = bcrypt.compareSync(password, existingAdmin.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: "Credenciales inválidas." });
      }
  
      const token = generateBearerToken(existingAdmin._id);
  
      res.status(200).json({
        message: "Inicio de sesión exitoso.",
        user: {
          _id: existingAdmin._id,
          email: existingAdmin.email,
          accessToken: token,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al intentar logear al usuario" });
    }
  };