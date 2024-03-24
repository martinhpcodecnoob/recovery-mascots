import express from "express";
import {createPet, updatePet, deletePet, getPetsByUserId} from '../controllers/pet'
import { verifyAccessToken } from "../middlewares/middlewares";


const petRouter = express.Router()

petRouter.post('/create',createPet)
petRouter.patch('/update',updatePet)
petRouter.delete('/delete',deletePet)
petRouter.get('/getPets/',verifyAccessToken,getPetsByUserId)

export default petRouter;