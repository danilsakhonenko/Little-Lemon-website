import mongoose from "mongoose";

const User = new mongoose.Schema({
    email:{type:String, required:true},
    username:{type:String, required:true},
    password: {type:String, required:true},
    role:{type:String, required:true, default: "USER"},
    image: {type:String}
})

export default mongoose.model('User',User)