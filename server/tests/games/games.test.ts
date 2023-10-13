// import request from "supertest";
import { describe, expect, test} from '@jest/globals';
const app = require('express')();
// import { app } from "../../src/server";
// import * as db from "../config/database";
const request = require('supertest');

// const agent = request.agent(app);

// beforeAll(async () => await db.connect());
// afterEach(async () => await db.clear());
// afterAll(async () => await db.close());

// const root: string = "http://localhost:3000";



// describe("games functional tests", () => {
//     describe("GET /games", () => {
//         test("success", async () => {
//             let err$: any;
//             let res$: any;
//             request(app).get("/games").expect(200);
//                 // .end((err: any, res: any) => {
//                 //     console.log(`What is the response ${res.type}\nWhat is the error ${res.type}`)
//                 //     if (err) err$ = err;
//                 //     res$ = res;
//                 //     // console.log(res.body);
//                 // });
//             // expect(res$.statusCode).toEqual(200);
//             // expect(res$.body).toBeUndefined();
//             // console.log(res);
//             // expect(res.statusCode).toEqual(200);
            
//         });
//     });
// });

// test("Dummy unit test", () => {
//     const actual:any = null; // not implemented yet
//     expect(actual).toBe(1);
//   });