var express = require('express');
var router = express.Router();
var dataService=require('../services/data.service');
const User=require('../models/user');

/* GET home page. */
router.get('/enquiries', function(req, res) {
 dataService.getDetails()
 .then(user=>{
  res.send(user)
})
});
router.post('/submit', function(req, res) {
  // const result=dataService.add(req.body.name,req.body.email,req.body.phone,req.body.message);
  
  // res.send(result);

  dataService.add(req.body.name,req.body.email,req.body.phone,req.body.message)
  .then(user=>{
    res.send(user)
  })
  
  });
  
router.get('/history', function(req, res) {
// const result=dataService.getEnquiries(req.body.name,req.body.email,req.body.phone,req.body.message)
// res.send(result);
dataService.getEnquiries(req.body.name,req.body.email,req.body.phone,req.body.message)
.then(user=>{
  res.send(user)
})
});

router.get('/enquiries/:id',function(req,res){
  dataService.getDetails(req.params.id)
  .then(user=>{
    res.send(user);
  })
})
router.put("/update/:id",function(req,res){
  dataService.update(req.params.id,req.body)
  .then(user=>{
   res.send({
     message:"Profile updated successfully"
   });
  });
})

module.exports = router;
