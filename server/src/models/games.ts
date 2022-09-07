import {Schema, model, Types} from "mongoose";

interface IGames {
    name: string;
    type: "base game" | "expansion" | "art";
    description?: string;
    rating?: number;
    creator?: string;
    features: Types.Array<String>
    price: number;
    release_date?: Date;
    add_ons?: Types.DocumentArray<Types.ObjectId>;
    editions?: Types.DocumentArray<Types.ObjectId>;
    base_game?:Types.ObjectId;
};

const gamesSchema = new Schema<IGames>({
    name: {
        type: String,
        required: [true, "name is required"],
        minLength: [4, "name must be at least 4 characters, got {VALUE}"],
        unique: true
    },
    type: {
        type: String,
        requiried: [true, "type is required"],
        enum: {
            values: ["base game", "expansion", "art"],
            message: `{VALUE} is not supported`
        }
    },
    description: { type:String },
    rating: {
        type: Number,
        max: [10, "rating can't be higher than 10"]
    },
    creator: { type: String },
    features: {
        type: [String],
        minLength: [1, "your game must have at least 1 feature"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    add_ons: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    release_date: { 
        type: Date
    },
    editions: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }],
    base_game: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }
});

export const Game = model<IGames>('Game', gamesSchema);