import mongoose from "mongoose"

export const User = new mongoose.Schema({
    username: {
                    type: String,
                    required: true,
                    minLength: [3, 'Must be at least length 3, got {VALUE}'],
                    unique: true
                },
    email: {
                type: String,
                required: true,
                unique: true
            },
    password: {
                type: String,
                require: true,
                minLength: [6, 'Must be at least length 6, got {VALUE}']
            },
    cart: Array<String>,
    wishlist: Array<String>,
    games: Array<String>,
    friends: Array<String>
})