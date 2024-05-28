import mongoose from "mongoose";

// create mongoose schema
const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true,
    },

    email : {
        type: String,
        required : true,
        unique : true,
    },

    password : {
        type: String,
        required : true,
        unique : true,
    },

    status: {
        type: Boolean,
        default: true,
      },
      trash: {
        type: Boolean,
        default: false,
      },

},{timestamps : true});


export default mongoose.model("User", userSchema)