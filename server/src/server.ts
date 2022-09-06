import * as dotenev from "dotenv";
import cors from "cors";
import express from "express";
import { connectToDatabase } from "./database";
var morgan = require("morgan");

//autoload or .env file
dotenev.config();

const { ATLAS_URI } = process.env;
// throw error and abort if no db connection is found
if (!ATLAS_URI) {
    console.error("No database connection found, please define it in ./server/.env")
    process.exit(1);
}

//connect to db
connectToDatabase(ATLAS_URI)
    .then(() => { // boot server after connection is made
        const app = express();
        app.use(cors());
        app.use(morgan());

        app.get('/', (_req, res) => {
            res.send("hello express");
        })

        app.listen(3000, ()=> {
            console.log("listening on port 3000")
        })
    })
    .catch(error => console.log(error));