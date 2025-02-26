import User from "../models/user.models.js";

const createUser = async function (req,res) {
   try{
        const {username,email,password} =  req.body

        if(!username || username.trim() === ''){
            res.send(400).json({msg:'Username can not be empty'})
        }
        if(!email || email.trim() === ''){
            res.send(400).json({msg:'Username can not be empty'})
        }
        
        if(password.length() <= 8 || password.length() > 16 ){
            res.send(400).json({msg:'Password length should be greater than 8 or less than or equal to 16'})
        }



        const newUser = new User({
            username,
            email,
            password
        })

        await newUser.save()

        res.send(200).json({msg:'user created',user:User})

   }
   catch(error){
    res.send(500).json({msg:'something went wrong',err:error})
   }
}

const getUser = async function (req,res) {
    try{
        const users = User.find()
        res.send(200).json({allUsers:users})
    }
    catch(error){
     res.send(500).json({msg:'something went wrong',err:error})
    }
 }

export {createUser,getUser}