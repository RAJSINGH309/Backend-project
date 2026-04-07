import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js";

const connectDB = async () => {

    try{
        const connectionInstacne = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);

        
        console.log(`\nconnected to database!!  ${connectionInstacne.connection.host}`);

    }catch (error){
        console.log("error", error);
        process.exit(1);
    }
}

export default connectDB;
