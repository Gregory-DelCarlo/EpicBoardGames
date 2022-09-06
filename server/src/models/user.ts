import {Schema, Model} from "mongoose"

export const UserSchema = new Schema({
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
    cart: Array<Schema.Types.ObjectId>,
    wishlist: Array<Schema.Types.ObjectId>,
    games: Array<Schema.Types.ObjectId>,
    friends: Array<Schema.Types.ObjectId>
});

const User = new Model('users', UserSchema);
module.exports = User;