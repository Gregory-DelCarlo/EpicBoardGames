import mongoose, { Mongoose } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";

let connection: Mongoose;
let mongoServer: MongoMemoryServer;

export const connect = async () => {
    mongoServer = await MongoMemoryServer.create();
    mongoose.set('strictQuery', false);
    connection = await mongoose.connect(mongoServer.getUri(), {autoCreate:true});
};

export const disconnect = async () => {
    await mongoose.connection.close();
    await mongoServer.stop();
};

export const clear = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        await collections[key].deleteMany({});
    }
};

// export async function connect() {
//     try {
//         const dbURI = "mongodb://localhost:27018";
//         const dbName = "test";
//         const connect = await mongoose.connect(dbURI, {dbName, autoCreate: true});
//         console.log(connect);
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