import mongoose from "mongoose";

const Dish = new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:String, required:true},
    description:{type:String, required:true},
    category:{type:String, required:true},
    special:{type:Boolean, required:true},
    image: {type:String, required:true}
})

export default mongoose.model('Dish',Dish)