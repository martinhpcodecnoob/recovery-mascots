import express from "express";
import {createPet, updatePet, deletePet, getPetsByUserId} from '../controllers/pet'

const petRouter = express.Router()

petRouter.post('/create',createPet)
petRouter.patch('/update',updatePet)
petRouter.delete('/delete',deletePet)
petRouter.get('/getPets',getPetsByUserId)

export default petRouter;