// server.js
//first comes the dependencies
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";

//creating the instances
const app = express();
const router = express.Router();

//setting the port to tell it to take predetermined port or use 3001

const API_PORT = process.env.API_PORT || 3001;

//configuring the API to use bodyParser which will look for JSON data in the request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger("dev"));

//now we need to set route path && initialize the API
router.get("/",(req,res)=>{
    res.json({
        message: "Hello World!"
    });
});

//to use the router configuration when we call /api
app.use("/api",router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));


