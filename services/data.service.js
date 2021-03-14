const User = require("../models/user");

 let history=[];
 

const add=(name,email,phone,message)=>{
  const user= new User({
    name:name,
    email:email,
    phone:phone,
    message:message
   })
   return user.save();
}
const getEnquiries=()=>{
  
  // return history;
  return User.find();
}
const getDetails=(_id)=>{
  return User.findById(_id);
}
const update=function(_id,data){
  return User.findOneAndUpdate({_id},data)
}
module.exports={
    add,
    getEnquiries,
    getDetails,
    update
}