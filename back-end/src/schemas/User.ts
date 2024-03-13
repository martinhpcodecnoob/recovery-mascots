import mongoose, { Schema } from "mongoose";
import { UserModel } from "../models/user";

export const userSchema:Schema<UserModel> = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cellPhone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pets: {
        type: [Schema.Types.ObjectId],
        required: false,
    },
},{versionKey:false })

export default mongoose.model<UserModel>('User', userSchema)