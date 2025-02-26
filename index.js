import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

import app from "./app.js";
import connectDB from './config/db.js';

connectDB()
.then(
    app.listen(port,()=>{
        console.log(`app running at ${port}`)
    })
)