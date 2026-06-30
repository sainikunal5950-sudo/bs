import mongoose from "mongoose";

import { DB_Name } from "../constants.js";


const connectDB = async () => {
    try {
        console.log("URI =", process.env.MONGODB_URI);
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection failed", error);
        process.exit(1);
    }
}


export default connectDB;


// bhai upr vale code pura overview hnn ki jaise ki mongoose.connect ek mongoose.connect ek connection instance object return krega bhai
// esobject ka andr details hogi connectionInstance = {
//    connection: {
//       host: "cluster0.mongodb.net",
//       port: 27017,
//       name: "myDatabase"
//    }
// }

// connection.host se