import {Schema, model, Types} from "mongoose"

interface IUser {
    username: string;
    email: string;
    password: string;
    // cart?: Types.Array<Types.ObjectId>;
    // wishlist?: Types.Array<Types.ObjectId>;
    // games?: Types.Array<Types.ObjectId>;
    // friends?: Types.Array<Types.ObjectId>;
}

const userSchema = new Schema<IUser>({ // dont need id here as it is autoset
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
    // cart: Types.Array<Schema.Types.ObjectId>,
    // wishlist: Types.Array<Schema.Types.ObjectId>,
    // games: Types.Array<Schema.Types.ObjectId>,
    // friends: Types.Array<Schema.Types.ObjectId>
});

export const User = model<IUser>('users', userSchema);