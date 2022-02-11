//import dotenv from 'dotenv';
//dotenv.config();
import  mongoose from "mongoose";

async function connect(url: string){
    await mongoose.connect(url);
} 

const url = process.env.URL_MONGO || 'mongodb://localhost:27017/admin';
connect(url).catch(err => console.error(err));

export default mongoose;