import express from "express";
const app = express();
import * as dotenev from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
const bodyParser = require('body-parser');
const morgan = require("morgan");

import { gamesRouter } from "./routes/games";

//autoload or .env file
dotenev.config();

const { ATLAS_URI } = process.env;
// throw error and abort if no db connection is found
if (!ATLAS_URI) {
    console.error("No database connection found, please define it in ./server/.env")
    process.exit(1);
}

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
        app.use("/games", gamesRouter);

        app.listen(3000, ()=> {
            console.log("listening on port 3000")
        })
    })
    .catch(error => console.log(error));

