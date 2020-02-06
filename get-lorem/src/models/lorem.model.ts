import mongoose, { Schema } from "mongoose";
import { ILorem } from '../interface/ILorem';

const loremSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    words: { type: [String], required: true }
});

const Lorem = mongoose.model<ILorem>("Lorem", loremSchema);

module.exports = Lorem;