import mongoose, { Mongoose } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { MongoClient } from "mongodb";

let connection: Mongoose;
let mongoServer: MongoMemoryServer;

export const connect = async () => {
    console.log("inside connect");
    mongoServer = await MongoMemoryServer.create();
    // mongoServer.start();
    console.log("created memory server");
    connection = await mongoose.connect(mongoServer.getUri(), {autoCreate:true});
    // connection = await MongoClient.connect(mongoServer.getUri(), {});
    console.log("connected to memory server");
};

export const disconnect = async () => {
    console.log("inside disconnect")
    await mongoose.connection.close();
    console.log("connection closed");
    await mongoServer.stop();
    console.log("server stopped");
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