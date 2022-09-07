import {Schema, model, Types} from "mongoose";

interface IGames {
    _id: Types.ObjectId;
    name: string;
    type: "base game" | "expansion" | "art";
    description?: string;
    rating?: number;
    creator: string;
    features: Types.Array<String>
    price: number;
    release_date: Date;
    add_ons: Types.DocumentArray<IGames>;
    editions: Types.DocumentArray<IGames>;
};

const gamesSchema = new Schema<IGames>({
    _id: {
        type: Schema.Types.ObjectId,
        index: true
    },
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
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    add_ons: { 
        type: [{_id: Schema.Types.ObjectId }],
        ref: 'Game'
    },
    release_date: { 
        type: Date, 
        required: true 
    },
    editions: { 
        type: [{_id: Schema.Types.ObjectId }],
        ref: 'Game'
    }
});

export const Game = model<IGames>('Game', gamesSchema);