import * as db from "./config/database";
import {beforeAll,
        afterAll,
        describe,
        expect,
        it,
        } from "@jest/globals";
// import the interface for typing
import personModel, {IPerson, PersonDocument} from "../src/models/person.model"
import { faker } from "@faker-js/faker";

//for all it blocks use async and await the data or they will not run properly

describe("personModel Testing", () => {
    // connect before testing and clear and close after
    beforeAll(async ()=>{await db.connect()});
    afterAll(async () => {
        await personModel.collection.drop();
        await db.disconnect();
    });

    const personInput: IPerson = {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        age: faker.number.int({min:18, max:50}),
        address: faker.location.streetAddress(),
        gender: faker.person.sexType(),
        job: faker.person.jobTitle(),
    }
    const person = new personModel({...personInput});

    //first test for creating a mongo doc
    describe("personModel Create Test", () => {
        it("should create a person Document", async () => {
            const createdPerson = await person.save();

            expect(createdPerson).toBeDefined();
            expect(createdPerson.name).toBe(person.name);
            expect(createdPerson.lastName).toBe(person.lastName);
            expect(createdPerson.address).toBe(person.address);
            expect(createdPerson.age).toBe(person.age);
            expect(createdPerson.gender).toBe(person.gender);
            expect(createdPerson.job).toBe(person.job);
        });
    });

    describe("personModel Read Test", () => {
        it("should find the created person", async () => {
            const fetchedPerson = await personModel.findOne({_id:person._id});

            expect(fetchedPerson).toBeDefined();
            expect(fetchedPerson.name).toBe(person.name);
            expect(fetchedPerson.lastName).toBe(person.lastName);
            expect(fetchedPerson.address).toBe(person.address);
            expect(fetchedPerson.age).toBe(person.age);
            expect(fetchedPerson.gender).toBe(person.gender);
            expect(fetchedPerson.job).toBe(person.job);
        });
    });
});