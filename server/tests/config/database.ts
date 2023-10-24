import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";

let connection: MongoClient;
let mongoServer: MongoMemoryServer;

export const connect = async () => {
    mongoServer = await MongoMemoryServer.create();
    connection = await MongoClient.connect(mongoServer.getUri(), {});
};

export const disconnect = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
};

// export const clear = async () => {
//     const collections = mongoose.connection.collections;
//     for (const key in collections) {
//         await collections[key].deleteMany({});
//     }
// };

// export async function connect() {
//     try {
//         const dbURI = "mongodb://localhost:27018";
//         const dbName = "test";
//         await mongoose.connect(dbURI, {dbName, autoCreate: true});
//     } catch (error) {
//         console.log("DB connect error");
//     };
// };

// export async function disconnect() {
//     try {
//         await mongoose.connection.close();
//     } catch (error) {
//         console.log("DB disconnect error");
//     }
// };