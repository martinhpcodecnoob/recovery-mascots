import express from "express";
import multer from 'multer';
import {createPet, updatePet, deletePet, getPetsByUserId, createPetImage} from '../controllers/pet'
import { verifyAccessToken } from "../middlewares/middlewares";

const petRouter = express.Router()
//si uso memoria se puede acceder al buffer, si uso el disco duro me dan la ruta y tengo que hacerlo manualmente
const upload = multer({dest: 'uploads/', storage: multer.memoryStorage()})

petRouter.post('/create',verifyAccessToken , upload.array('files'), createPet)
petRouter.patch('/update',updatePet)
petRouter.delete('/delete',deletePet)
//petRouter.get('/getPets/:userId',getPetsByUserId)
petRouter.post('/image', upload.single('file'), createPetImage)
petRouter.get('/getPets/',verifyAccessToken,getPetsByUserId)


export default petRouter;