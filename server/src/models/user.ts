import {Schema, model, Types} from "mongoose"

interface IUser {
    username: string;
    email: string;
    password: string;
    // cart?: Array<Types.ObjectId>;
    // wishlist?: Array<Types.ObjectId>;
    // games?: Array<Types.ObjectId>;
    // friends?: Array<Types.ObjectId>;
}

const userSchema = new Schema<IUser>({
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
    // cart: Array<Schema.Types.ObjectId>,
    // wishlist: Array<Schema.Types.ObjectId>,
    // games: Array<Schema.Types.ObjectId>,
    // friends: Array<Schema.Types.ObjectId>
});

export const User = model<IUser>('IUser', userSchema);