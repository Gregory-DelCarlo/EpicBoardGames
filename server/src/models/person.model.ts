import mongoose, {Types, Schema, Document} from "mongoose";

export interface IPerson {
    name: string;
    lastName: string;
    address: string;
    gender: string;
    job: string;
    age: number;
}

export interface PersonDocument extends IPerson, Document {
    updatedAt: Date;
    createdAt: Date;
}
const PersonSchema = new Schema<PersonDocument>(
    {
        name: {type: String, required: [true, "name required"]},
        lastName: {type: String},
        address: {type: String, required: [true, "address required"]},
        gender: {type: String, required: [true, "gender is required"]},
        job: {type: String},
        age: {type: Number, min: [18, "age must be at least 18"]},
    },
    {
        timestamps: true, //creates updatedAt and createdAt
    }
);

const personModel = mongoose.model("Person", PersonSchema);
export default personModel;