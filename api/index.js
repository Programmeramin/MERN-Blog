import express from "express";
import colors from "colors";
import dotenv from "dotenv"
import  MongoDBConnect  from "../config/MongoDBConnect.js";

// config
dotenv.config();
const app = express();

// env var 
const PORT = process.env.PORT || 6060

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// route

app.listen(PORT, () =>{
    MongoDBConnect();    
    console.log(`Server is running on port ${PORT}`.bgBlue.white);
});