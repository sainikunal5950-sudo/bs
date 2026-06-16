// import mongoose from "mongoose";
// import { DB_Name } from "./constants";



// require('dotenv').config({path: './env'})  this was a defualt but we use import vala syntax because code mai hmne sari jgah voh use kiya hai 

import dotenv from "dotenv"

import connectDB from "./db/index.js"



dotenv.config({
    path: './env'
})


connectDB();
















// import express from "express";
// const app = express()
//     (async () => {
//         try {
//             await moongose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error", (error) => {
//                 console.log("Error: ", error);
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`App is Listening on port ${process.env.PORT}`);
//             })

//         } catch (error) {
//             console.log("Error: ", error);
//             throw err

//         }
//     })()