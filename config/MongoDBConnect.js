import mongoose from "mongoose"

 const MongoDBConnect = async () =>{
  mongoose.connect(process.env.MONGO_URL);

    try {     
        console.log(`MongoDB Connection Successful`.bgGreen.black);
    } catch (error) {
        console.log(`MongoDB Connection Failed`.bgRed.white);
    }

}  


export default MongoDBConnect;