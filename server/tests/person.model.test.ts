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
            // function fails if fetchedPerson isnt defined
            expect(personMismatchChecker(fetchedPerson, person)).toBeFalsy();
        });
    });

    describe("personModel Update Test", () => {
        it("should update the person stored", async () => {
            const personUpdateInput: IPerson = {
                name: faker.person.firstName(),
                lastName: faker.person.lastName(),
                age: faker.number.int({min:18, max:50}),
                address: faker.location.streetAddress(),
                gender: faker.person.sexType(),
                job: faker.person.jobTitle(),
            };

            await personModel.updateOne({_id: person._id }, {...personUpdateInput});
            const fetchedPerson = await personModel.findOne({_id: person._id});

            expect(fetchedPerson).toBeDefined();
            // function fails if fetchedPerson isnt defined
            expect(personMismatchChecker(fetchedPerson, personUpdateInput)).toBeFalsy();
            expect(personMismatchChecker(fetchedPerson, person)).toBeTruthy();
        });
    });

    describe("personModel Delete Test", () => {
        it("should delete the person stored", async () => {
            await personModel.deleteOne({ _id: person._id});
            const fetchedPerson = await personModel.findOne({ _id: person._id});
            expect(fetchedPerson).toBeNull();
        });
    });
});

// expect().toMatchObject() isnt working with TS so I just created a function to do it
const personMismatchChecker = (first:IPerson, second:IPerson) => {
    let flag = true;
    if (
        first.name == second.name &&
        first.lastName == second.lastName &&
        first.address == second.address &&
        first.age == second.age &&
        first.gender == second.gender &&
        first.job == second.job
    ){
        flag = false;
    }

    return flag;
};