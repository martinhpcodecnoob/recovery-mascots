import express from "express";
import {generateQRCode} from '../controllers/utils'

const utilsRouter = express.Router()

utilsRouter.post('/generate',generateQRCode)

export default utilsRouter;