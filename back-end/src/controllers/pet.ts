import { Request, Response } from "express";
import Pet from '../schemas/Pet'
import { petSchemaValidation, updatePetValidation, deletePetValidation } from "../utils/joi/pet-validator";
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

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
        const { name, age, breed, weight, category, description, images, userId } = validationResult.value;
        const newPet = new Pet({
            name,
            age,
            breed,
            weight,
            category,
            description,
            images,
            userId
        })

        await newPet.save()
        res.status(201).json(newPet)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al intentar crear la mascota.' });
    }
}

export const getPetsByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        const pets = await Pet.find({ userId });

        res.status(200).json(pets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las mascotas del usuario' });
    }
};

export const getPetById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findById(id);

        if (!pet) {
            return res.status(404).json({ error: 'Mascota no encontrada' });
        }

        res.status(200).json(pet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la mascota' });
    }
};

export const updatePet = async (req: Request, res: Response) => {
    try {
        const validationResult = updatePetValidation.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Datos de actualización de mascota no válidos",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Datos de actualización de mascota no válidos" });
        }

        const { id, ...updateData } = validationResult.value;

        const updatedPet = await Pet.findByIdAndUpdate(id, { $set: updateData }, { new: true });

        if (!updatedPet) {
            return res.status(404).json({ error: 'Mascota no encontrada' });
        }

        res.status(200).json(updatedPet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la mascota' });
    }
};

export const deletePet = async (req: Request, res: Response) => {
    try {
        const validationResult = deletePetValidation.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Datos de eliminación de mascota no válidos",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Datos de eliminación de mascota no válidos" });
        }

        const { id } = validationResult.value;

        const deletedPet = await Pet.findByIdAndDelete(id);

        if (!deletedPet) {
            return res.status(404).json({ error: 'Mascota no encontrada' });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la mascota' });
    }
};

export const createPetImage = async (req: Request, res: Response) => {
    try {
        //@ts-ignore
        console.log("form:", req.file)
       /*  const currentPet = await Pet.findByIdAndUpdate("65f4d60ee5503ce3857ca638");
        if(!currentPet){
            console.error({
                error: "Imagen o formato de imagen invalido",
            });
            return res.status(400).json({ error: "Imagen o formato de imagen invalido" });
        }
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const cloudinaryResult  = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({}, (err, result) => {
                    if(err){
                        reject(err)
                    }
                    resolve(result)
                })
                .end(buffer)
        })
        //@ts-ignore
        currentPet.images.push(cloudinaryResult.secure_url);

        await currentPet.save();

        //@ts-ignore
        res.status(201).json(cloudinaryResult.secure_url); */
        res.status(200)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al intentar crear la mascota.' });
    }
}