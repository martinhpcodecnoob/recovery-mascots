import { Document, Number, Schema } from 'mongoose';

export interface User {
    _id?: any;
    name: string;
    lastName: string;
    email: string;
    cellphone: Number;
    password: string;
    pets: [Schema.Types.ObjectId]
}

export interface UserModel extends User, Document {}