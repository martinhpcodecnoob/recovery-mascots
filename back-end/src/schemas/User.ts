import mongoose, { Schema } from "mongoose";
import { UserModel } from "../models/user";

export const userSchema:Schema<UserModel> = new Schema({
    name: {
        type: String,
        required: true,
    },
    cellphone: {
        type: Schema.Types.Number,
        required: false,
    },
},{versionKey:false})

export default mongoose.model<UserModel>('User', userSchema)