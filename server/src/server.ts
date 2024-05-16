import express from "express";
export const app = express(); // create express server
import * as dotenev from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
const listEndpoints = require('express-list-endpoints')
const bodyParser = require('body-parser');
const morgan = require("morgan");

import { gamesRouter } from "./routes/games";

// autoload or .env file
dotenev.config();

const { ATLAS_URI, NODE_ENV } = process.env;
// throw error and abort if no db connection is found
if (!ATLAS_URI) {
    console.error("No database connection found, please define it in ./server/.env")
    process.exit(1);
}

mongoose.set('strictQuery', false);

mongoose.connect(ATLAS_URI)
    .then(() => { // boot server after connection is made
        console.log("Successfully connected to MongoDB.");
        console.log("booting server");
        // for json parsing
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
        // to prevent XDR attacks
        app.use(cors());
        //logger   
        app.use(morgan("combined"));

        //connect routes
        // app.all('/api/');
        app.use("/api/games", gamesRouter);
        
        // set port if we aren't in the testing environment
        if (NODE_ENV !== "test") {
            app.listen(process.env.PORT || 3000, () => {
                console.log(`listening on port ${process.env.PORT || 3000}`)
            });
        }

        console.log(listEndpoints(app));
    })
    .catch(error => console.log(error)); // throw any errors to the console

