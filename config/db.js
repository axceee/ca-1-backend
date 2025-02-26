import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

import mongoose from "mongoose";


const connectDB = async function () {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log(`mongo db connected`)
    }
    catch(error){
        console.error(error)
    }
}

export default connectDB