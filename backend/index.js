const express=require("express")
const connectDB = require("./dbs/db")
const app=express()
const dotenv= require("dotenv")
const authRoute=require("./routes/auth")



app.use(express.json())
dotenv.config()
app.use("/api/auth",authRoute)


app.get("/",(req,res)=>{
    res.send("home")
})

app.listen(process.env.PORT,()=>{
    connectDB() 
    console.log("runing")
})