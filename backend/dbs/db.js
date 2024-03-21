const mongoose=require("mongoose")
const connectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_url)
        console.log("db connected  successfully!!")
    }
    catch(error){
        console.log("db fail"+error)
    }

}
module.exports=connectDB
