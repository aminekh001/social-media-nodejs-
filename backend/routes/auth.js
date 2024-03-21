const express=require("express")
const router=express.Router()
const user=require("../models/User")
const User = require("../models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

//register
router.post("/register",async(req ,res)=>{
    try{
        const {password,username,email}=req.body
        const existingUser=await User.findOne({$or:[{username},{email}]})
        if(existingUser){
            res.status(400).json("userName or email already existst")
        }else{

        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(password,salt)
        const newUser=new User({...req.body,password:hashedpassword})
        const saveUser=await newUser.save()
        res.status(201).json(saveUser)
        
    }

    }
    catch(error){
        res.status(500).json(error)
    }
})

//login
router.post("/login",async(req,res)=>{
    try{
        let user;
        if(req.body.email){
            user=await User.findOne({email:req.body.email})
        }
        if(!user){
            return res.status(404).json("user not found")
        }
        const match= await bcrypt.compare(req.body.password,user.password)
        if(!match){
            return res.status(401).json("bad credenials")
        }
        const {password,...data}=user._id
        const token=jwt.sign({_id:user._id},"jwt",{expiresIn:"3d"})
        res.cookie("token",token).status(200).json(data)

    }
    catch(error){
        res.status(500).json(error)

    }
    
})

//logout

// fetch current user

module.exports=router