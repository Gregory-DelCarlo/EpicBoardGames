import mongoose from "mongoose";
import { UserSchema } from "./models/user";

// create a POJO to hold your Models so they can be used in your routes
export const collections: {
    users?: 
} ={}

export async function connectToDatabase(uri: string) {
    const db = await mongoose.createConnection(uri);

    // create a mongoose model using our Schema
    let userSchema = new mongoose.Schema(UserSchema);  
    const User = db.model('UserModel', userSchema);
    // create new User document
    User.create({
        username: "First_user",
        email: "Anemail@gmail.com",
        password: "123456"
    }, (err) => {
        let r;
        err ? r = this.handleError(err) : 
            r = `User: ${this.username} successfully created`;
        return r
    });

    // create a new User


//     let u = userModel.find({})
//     console.log(u);

}