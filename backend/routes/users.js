const express=require("express")
const router=express.Router()
const user=require("../models/User")


router.get("/:userId",async(req,res)=>{
    const {userId}=req.params
    try{

        

    }catch(error){
        res.status(500).json(error)
    }
})


