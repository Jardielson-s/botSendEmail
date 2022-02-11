import dotenv from 'dotenv';
dotenv.config();

import  mongoose, { Connection }  from "mongoose";

class DataBase {

    private  url: string;
    constructor(url: string){
        this.url = url;
    }

    public createConnection(){
        return mongoose.connect(this.url, {
            
        })
    }
}

const dataBase = new DataBase(process.env.PORT);
export default  dataBase.createConnection();