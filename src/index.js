import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

import dns from 'dns';

dns.setServers(['1.1.1.1','8.8.8.8']);


dotenv.config( {
    path: './env'
}
);

// connectDB();

const startServer = async () => {

    try{

        // await , wait for connect to mongo db then move to next //
        await connectDB();

          // listening to server port after connection to mongo db is established //
        const server = app.listen(process.env.PORT || 8000, () => {
             
            console.log(`Server is running on port ${server.address().port}`);
        });

        // handling server error//
        server.on("error", (error) => {
            console.error("Server error:", error.message);
            process.exit(1);
        })

    }catch(error){
         console.error("Failed to start application:", error.message);
        process.exit(1);

    }
}

startServer();



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