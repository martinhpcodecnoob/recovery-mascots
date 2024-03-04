import mongoose, { Schema } from "mongoose";
import { PetModel } from "../models/pet";

export const petSchema:Schema<PetModel> = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: false,
    },
    breed: {
        type: String,
        required: false,
        unique: false,
    },
    weight: {
        type: Number,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: false,
    },
},{versionKey:false })

export default mongoose.model<PetModel>('Pet', petSchema)