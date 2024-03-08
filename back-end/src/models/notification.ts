import { Document, Schema } from 'mongoose';

export interface Notification {
    _id?: any;
    userId: Schema.Types.ObjectId;
    petId: Schema.Types.ObjectId;
    message: string;
    view: boolean;
}

export interface NotificationModel extends Notification, Document {}