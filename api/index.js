import express from "express";
import colors from "colors";
import dotenv from "dotenv"
import  MongoDBConnect  from "../config/MongoDBConnect.js";
import userRouter from "../router/userRoute.js";
import authRouter from "../router/authRoute.js";
import  ErrorHandler  from "../middleware/ErrorHandler.js";
  
// config
dotenv.config();
const app = express();

// env var 
const PORT = process.env.PORT || 6060

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//error handler
app.use(ErrorHandler)

// route
app.use("/api/user/", userRouter);
app.use("/api/auth/", authRouter);

app.listen(PORT, () =>{
    MongoDBConnect();    
    console.log(`Server is running on port ${PORT}`.bgBlue.white);
});   
 