import { Document } from 'mongoose';

export interface ILorem extends Document {
    name: string,
    words: [string]
}