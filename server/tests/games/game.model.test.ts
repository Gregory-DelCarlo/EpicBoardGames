import * as db from "../config/database";
import {beforeAll,
    afterAll,
    describe,
    expect,
    it,
    } from "@jest/globals";
// import the interface for typing
import gameModel, {IGame, GameDocument} from "../../src/models/games.model";
import { faker } from '@faker-js/faker';
import { createFeature } from "@ngrx/store";

const pickType = () => {
    let num = Math.floor(Math.random() * 3);
    const types = ["base game", "expansion", "art"];
    return types[num];
}

const createFeatures = () => {
    const features = faker.word.words({count: {min: 1, max:5}});
    return features.split(' ');
}

// expect().toMatchObject() isnt working with TS so I just created a function to do it
// returns true unless the first and second Object are exactly the same
const gameMismatchChecker = (first:IGame, second:IGame) => {
    let flag = true;
    if (first.name == second.name &&
        first.type == second.type && 
        first.features.every( (feature, index) => {return feature == second.features[index]}) &&
        first.price == second.price) 
        {
            flag = false;
        }

    return flag;
};

//for all it blocks use async and await the data or they will not run properly
describe("GameModel Testing", () => {
    //connect before testing and clear and close after
    beforeAll(async ()=>{await db.connect()});
    afterAll(async () => {
        await gameModel.collection.drop();
        await db.disconnect();
    });
    const type = pickType();
    const features = createFeatures();
    const gameInput: IGame = {
        name: faker.word.words({count: 3}),
        type: type,
        features: features,
        price: Number(faker.commerce.price({dec: 2})),
    };
    const game = new gameModel({...gameInput});

    describe("gameModel Create Test", () => {
        it("should create a game Document", async () => {
            const createdGame = await game.save();

            expect(createdGame).toBeDefined();
            expect(gameMismatchChecker(createdGame, game)).toBeFalsy();
        });
    });

    describe("gameModel Read Test", () => {
        it("should find the created game", async () => {
            const fetchedGame = await gameModel.findOne({_id:game._id});

            expect(fetchedGame).toBeDefined();
            // test fails if fetchedGame is not defined
            expect(gameMismatchChecker(fetchedGame, game)).toBeFalsy();
        });
    });

    describe("gameModel Update Test", () => {
        it("should update the game stored", async () => {
            const gameUpdateInput: IGame = {
                name: faker.word.words({count: 3}),
                type: type,
                features: features,
                price: Number(faker.commerce.price({dec: 2})),
            };

            await gameModel.updateOne({_id: game._id }, {...gameUpdateInput});
            const fetchedGame = await gameModel.findOne({_id: game._id});
    
            
            // the game found and the gameInput should be the exact same
            expect(gameMismatchChecker(fetchedGame, gameUpdateInput)).toBeFalsy();
            // the game found and the original game should be different by at least one value
            expect(gameMismatchChecker(fetchedGame, game)).toBeTruthy();
        });
    });

    describe("gameModel Delete Test", () => {
        it("should delete the person stored", async () => {
            await gameModel.deleteOne({_id: game._id});
            const fetchedGame = await gameModel.findOne({_id: game._id});
            expect(fetchedGame).toBeNull();
        });
    });
});
