import mongoose, { Mongoose } from "mongoose";

const userSchema = new Mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
    },
},{timestamps:true})

const User = mongoose.model('User',userSchema)
export default User