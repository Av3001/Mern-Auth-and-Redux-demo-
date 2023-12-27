import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from '../utils/generateToken.js'


//Auth User 
const authUser=asyncHandler(async (_req,res)=>{
    res.status(200).json({message:"Auth User"})
    
}); 

//Register a new User
const registerUser=asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body;
    const userExists=await User.findOne({email});
    if (userExists){
        res.status(400);
        throw new Error("User already exists")
    }
    const user=await User.create({
        name,
        email,
        password
    })

    if (user){
        generateToken(res,user._id)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
        });
    }else{
        res.status(400);
        throw new Error("Invalid user data")
    }
    
});

//Logout User
const logoutUser=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"logout User"})
    
});

//get User Profile
//Protected Route
const getUserProfile=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"User Profile"})
    
});

//Update user Profile
//Protected Route

const updateUserProfile=asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Update User Profile"})
    
});

export {authUser,registerUser,logoutUser,getUserProfile,updateUserProfile}