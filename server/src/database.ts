import mongoose from "mongoose";
import { User } from "./schemas/user";

export async function connectToDatabase(uri: string) {
    const db = await mongoose.createConnection(uri);

    let userSchema = new mongoose.Schema(User);  
    const userModel = db.model('UserModel', userSchema);
    // await userModel.create({
    //     username: "First_user",
    //     email: "Anemail@gmail.com",
    //     password: "123456"
    // });
    console.log(userModel.find({}));
}