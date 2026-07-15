import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
     
    // user:String,
    // email:String,
    // age:Number,
    // isActive:Boolean,
    // createdAt:new Date().toString()
    //              --for multiple values--
    user:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }


    

}, { timestamps: true })

export default User = mongoose.model("User",userSchema)












// import mongoose, { Schema } from "mongoose";

// const userSchema = new Schema({

//     // user:String,
//     // email:String,
//     // age:Number,
//     // isActive:Boolean,
//     // createdAt:new Date().toString()
//     //                        -- for multiple values --
//     user:{
//         type:String,
//         required:[true,"Name is required!"]
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     }


// }, { timestamps: true })

// const User = mongoose.model("User", userSchema)

