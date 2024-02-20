import express from "express";
import {createUser} from '../controllers/user'

const userRouter = express.Router()

userRouter.get('/createuser',createUser)

export default userRouter;