const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const User_Details =new Schema({
    Employee_id: {type:String,required:true,unique:true},
    Employee_name: {type:String,required:true},
    Employee_dept: {type:String,required:true}
})

module.exports = mongoose.model("User_Details",User_Details)