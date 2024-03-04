import { Document, Number, Schema } from 'mongoose';

export interface Pet {
    _id?: any;
    name: string;
    age: string;
    breed: string;
    weight: Number;
    category: string;
    description: string;
    images: [string];
    status: string;
    userId: Schema.Types.ObjectId;
}

export interface PetModel extends Pet, Document {}