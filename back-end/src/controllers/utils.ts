import { Request, Response } from "express";
import qrCode from "qrcode";
import { generateQRCodeValidation } from "../utils/joi/utils-validator";

export const generateQRCode = async (req: Request, res: Response) => {
    try {
        const validationResult = generateQRCodeValidation.validate(req.body);

        if (validationResult.error) {
            console.error({
                error: "Datos para la generacion del qr no válidos",
                details: validationResult.error.details,
            });
            return res.status(400).json({ error: "Datos para la generacion del qr no válidos" });
        }
        const { link } = validationResult.value;

        const qrCodeBuffer = await qrCode.toBuffer(link);

        res.setHeader("Content-Type", "image/png");
        res.send(qrCodeBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al generar el código QR' });
    }
};