import mongoose from "mongoose";
import { User } from "./models/user";


export async function connectToDatabase(uri: string) {
    await mongoose.createConnection(uri);
    // create new User document
    const firstUser = new User({
        username: "First_user",
        email: "Anemail@gmail.com",
        password: "123456"
    });

    firstUser.save().then(trip => console.log(trip));
}