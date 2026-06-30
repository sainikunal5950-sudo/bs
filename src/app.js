import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// app.use()   jo bhi rqst server pe aya sbsbe phle ye kaam krr 
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// BHAI YE app.use kr rha hai hmm jb  middlware type jaise ki secruity reason 

app.use(express.json({ limit: "16kb" }))   // 16 kb se jyda data aya toh block krd e
app.use(express.urlencoded({ extended: true, limit: "16kb" }))   // ye us data ko object mai convert krta hai form ka 
app.use(express.static("public"))   // public folder ka andr jo bhi unko direct browser ko access krne do 
app.use(cookieParser())
export { app };