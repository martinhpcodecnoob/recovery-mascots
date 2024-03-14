import { z } from "zod";

export const petCreateSchema = z.object({
    name: z
        .string()
        .min(1, "Nombre de la mascota requerido")
        .min(3, "Mínimo de caracteres (3)")
        .max(30, "Máximo de caracteres (30)"),
    age: z.date().refine((date) => {
        return date != null && !isNaN(date.getTime());
    }, { message: "La edad de la mascota debe ser una fecha válida" }),
    breed: z
        .string()
        .min(1, "La raza de la mascota es requerida"),
    weight: z.number().min(1, "Introduzca el peso de su mascota"),
    category: z
        .string()
        .min(1, "Categoria requerida"),
    description: z
        .string()
        .min(1, "Agregue una descripcion para su mascota")
        .min(10, "Mínimo de caracteres (10)")
        .max(70, "Máximo de caracteres (70)"),
    /* images: z
        .string()
        .min(1, "Agregue una imagen para su mascota")
        .min(1, "Mínimo de caracteres (1)")
        .max(30, "Máximo de caracteres (30)"), */
})
