import { Document, Number, Schema } from 'mongoose';

export interface User {
    _id?: any;
    name: string;
    cellphone?: Number;
}

export interface UserModel extends User, Document {}