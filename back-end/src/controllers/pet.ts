import { Request, Response } from "express";
import Pet from '../schemas/Pet'
import { petSchemaValidation, updatePetValidation, deletePetValidation, deleteImageSchemaValidation } from "../utils/joi/pet-validator";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const createPet = async (req: Request, res: Response) => {

    interface CloudinaryUploadResult {
        secure_url: string;
        public_id: string;
    }

    try {
        const files = req.files as Express.Multer.File[];
        if (!files || files.length === 0) {
            console.error({ error: 'Archivos no encontrados o vacíos' });
            return res.status(400).json({ error: 'Archivos no encontrados o vacíos' });
        }
        const validationResult = petSchemaValidation.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Datos de registro de mascota no válidos",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Datos de registro de mascota no válidos" });
        }
        const { name, age, breed, weight, category, description, userId } = validationResult.value;
        let images: { cloudinary_url: string; publicId: string }[] = [];

        for (const file of files) {
            const buffer = file.buffer;
            const cloudinaryResult = await new Promise<CloudinaryUploadResult>((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(result as CloudinaryUploadResult);
                }).end(buffer);
            });

            const image = {
                cloudinary_url: cloudinaryResult.secure_url,
                publicId: cloudinaryResult.public_id,
            };

            images.push(image);
        }
        const newPet = new Pet({
            name,
            age,
            breed,
            weight,
            category,
            description,
            images,
            userId
        });

        await newPet.save();

        res.status(201).json(newPet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al intentar crear la mascota.' });
    }
}

export const getPetsByUserId = async (req: Request, res: Response) => {
    try {
        const { _id } = (req as any).user
        const userId = _id.toString()
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

export const deletePetImage = async (req: Request, res: Response) => {

    interface CloudinaryDeleteResult {
        secure_url: string;
        public_id: string;
    }

    try {
        const validationResult = deleteImageSchemaValidation.validate(req.body);
        if (validationResult.error) {
            console.error({
                error: "Datos de eliminación de imagen de mascota no válidos",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Datos de eliminación de imagen de mascota no válidos" });
        }

        const { petId, publicId } = validationResult.value;

        const pet = await Pet.findById(petId);

        if (!pet) {
            return res.status(404).json({ error: 'Mascota no encontrada' });
        }
        const imageIndex = pet.images.findIndex((image) => image.publicId === publicId);

        if (imageIndex === -1) {
            return res.status(404).json({ error: 'Imagen no encontrada en la mascota' });
        }
        const deletedImage = pet.images.splice(imageIndex, 1)[0];

        await new Promise<CloudinaryDeleteResult>((resolve, reject) => {
            cloudinary.uploader.destroy(deletedImage.publicId, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result as CloudinaryDeleteResult);
            });
        });

        await pet.save();

        res.status(200).json({ message: 'Imagen eliminada con éxito', deletedImage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al intentar eliminar la imagen de la mascota' });
    }
};