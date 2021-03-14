const mongoose=require('mongoose');
const User=mongoose.model('User',{
    name:String,
    email:String,
    phone:Number,
    message:String
});
module.exports=User;