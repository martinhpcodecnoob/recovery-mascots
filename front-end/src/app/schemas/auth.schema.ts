import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "El correo es requerido")
        .regex(
            new RegExp(
                "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            ),
            "Ingrese un correo valido"
        ),
    password: z
        .string()
        .min(1, "La contraseña es requerida")
        .min(8, "Tamaño mínimo de 8 caracteres")
        .max(25, "Tamaño máximo de 25 caracteres"),
});

export const registerSchema = z.object({
    name: z
        .string()
        .min(1, "Nombres requeridos")
        .min(3, "Mínimo de caracteres (3)")
        .max(30, "Máximo de caracteres (30)"),
    lastName: z
        .string()
        .min(1, "Apellidos requeridos")
        .min(3, "Mínimo de caracteres (3)")
        .max(30, "Máximo de caracteres (30)"),
    email: z
        .string()
        .min(1, "El correo es requerido")
        .regex(
            new RegExp(
                "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
            ),
            "Ingrese un correo valido"
        ),
    cellPhone: z.number().min(1, "Teléfono requerido").min(1000000, "Mínimo de caracteres (7)").max(9999999999, "Máximo de caracteres (10)"),
    password: z
        .string()
        .min(1, "La contraseña es requerida")
        .min(8, "Tamaño mínimo de 8 caracteres")
        .max(25, "Tamaño máximo de 25 caracteres"),
    confirmPassword: z
        .string()
        .min(1, "Confirmar contraseña es requerido")
        .min(8, "Tamaño mínimo de 8 caracteres")
        .max(25, "Tamaño máximo de 25 caracteres"),
    acceptTerms: z.boolean().refine((value) => value === true, {
        message: "Debes aceptar los términos y condiciones para continuar",
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
});
    