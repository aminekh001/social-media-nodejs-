const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true

    },
    bio:{
        type:String,
        default:""
    },
    profilePicture:{
        type:String,
        default:""
    },
    coverpicutre:{
        type:String,
        default:""
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }],
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    blockList:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]




},{timestamps:true})
const User=mongoose.model("user",userSchema)
module.exports=User