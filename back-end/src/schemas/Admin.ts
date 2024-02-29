import mongoose, { Schema } from "mongoose";
import { AdminModel } from "../models/admin";

export const adminSchema: Schema<AdminModel> = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { versionKey: false })


export default mongoose.model<AdminModel>('Admin', adminSchema)