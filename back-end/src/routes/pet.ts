import express from "express";
import multer from 'multer';

import { createPet, updatePet, deletePet, getPetsByUserId, deletePetImage } from '../controllers/pet'
import { verifyAccessToken } from "../middlewares/middlewares";

const petRouter = express.Router()
const upload = multer({ dest: 'uploads/', storage: multer.memoryStorage() })

petRouter.post('/create', verifyAccessToken, upload.array('files'), createPet)
petRouter.patch('/update', updatePet)
petRouter.delete('/delete', deletePet)
petRouter.get('/getPets/', verifyAccessToken, getPetsByUserId)
petRouter.patch('/deleteImage/', verifyAccessToken, deletePetImage)

export default petRouter;