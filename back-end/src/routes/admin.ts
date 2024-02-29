import express from "express";
import {adminLogin} from '../controllers/admin'

const adminRouter = express.Router()

adminRouter.post('/login', adminLogin)

export default adminRouter;