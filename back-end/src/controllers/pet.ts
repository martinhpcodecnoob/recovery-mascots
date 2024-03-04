import { Request, Response } from "express";
import Pet from '../schemas/Pet'
import { petSchemaValidation } from "../utils/joi/pet-validator";

export const createPet = async (req: Request, res: Response) => {
    try {
        const validationResult = petSchemaValidation.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Datos de registro de mascota no válidos",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Datos de registro de mascota no válidos" });
        }
        const { name, age, breed, weight, category, description, images, status, userId } = validationResult.value;
        const newPet = new Pet({
            name,
            age,
            breed,
            weight,
            category,
            description,
            images,
            status,
            userId
        })

        await newPet.save()
        res.status(201).json(newPet)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
}