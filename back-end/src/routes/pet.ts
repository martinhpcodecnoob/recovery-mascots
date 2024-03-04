import express from "express";
import {createPet} from '../controllers/pet'

const petRouter = express.Router()

petRouter.post('/create',createPet)

export default petRouter;