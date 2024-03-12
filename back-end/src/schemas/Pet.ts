import mongoose, { Schema } from "mongoose";
import { PetModel } from "../models/pet";

const PetCategoryEnum = ["Perro", "Gato"];

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
        enum: PetCategoryEnum,
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
        enum: ["perdido","encontrado","en casa"],
        default: "en casa", 
        required: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: false,
    },
},{versionKey:false })

export default mongoose.model<PetModel>('Pet', petSchema)