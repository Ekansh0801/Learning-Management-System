import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,        
    },
    password:{
        type:String,
        required:true,        
    },
    role:{
        type:String,
        enum:["Student","Instructor"],
        default:"Student"
    },
    // enrolledCourses:[{
    //     type:Mongoose.Schema.Types.ObjectId,
    //     ref:'Course'
    // }],
    photoUrl:{
        type:String,
        default:"",
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema);