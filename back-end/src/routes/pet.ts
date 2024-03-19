import express from "express";
import {createPet, updatePet, deletePet, getPetsByUserId, createPetImage} from '../controllers/pet'

const petRouter = express.Router()
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

petRouter.post('/create',createPet)
petRouter.patch('/update',updatePet)
petRouter.delete('/delete',deletePet)
petRouter.get('/getPets/:userId',getPetsByUserId)
petRouter.post('/image', upload.single('file'), createPetImage)

export default petRouter;