import express from "express";
import {createUser, getUsers} from '../controllers/user'
import { verifyAccessToken } from "../middlewares/middlewares";

const userRouter = express.Router()

userRouter.get('/createuser',createUser)
userRouter.get('/users',verifyAccessToken ,getUsers)
export default userRouter;