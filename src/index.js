import dotenv from "dotenv";
import connectDB from "./db/index.js";

import dns from 'dns';

dns.setServers(['1.1.1.1','8.8.8.8']);


dotenv.config( {
    path: './env'
}
);

connectDB();


/*
import mongoose from "mongoose";
import {DB_NAME} from "./config.js";
import {MONGO_URI} from "./config.js";
import app from "./app.js"; 


(async () => {


    try {
        await mongoose.connect(`${MONGO_URI}/${DB_NAME}`) //
        
        
        app.on("error", (error) => {
              
            console.log("erorr", error);
           })

        app.listen( process.env.PORT , () => {
            console.log(`your app listen on port ${process.env.PORT}`);

         }) 


    } catch (error) {
        console.log("ERROR!");
    }
})() */