import { Document, Number, Schema } from 'mongoose';

const statusEnum = ['perdido', 'encontrado', 'en casa'];

enum PetCategory {
    Perro = "Perro",
    Gato = "Gato"
}

export interface Pet {
    _id?: any;
    name: string;
    age: string;
    breed: string;
    weight: Number;
    category: PetCategory;
    description: string;
    images: [string];
    status: typeof statusEnum[number];
    userId: Schema.Types.ObjectId;
}

export interface PetModel extends Pet, Document {}