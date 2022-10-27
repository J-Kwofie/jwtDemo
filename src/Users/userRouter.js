

//import the required module
const express = require('express');
const router =  express.Router()
const userController = require('./userController')

//This get method will get the user with token
router.get('/',(req,res)=>{
    
       //retrive userdata from req claims
       try{
              const userdata = req.claims;
              console.log(userdata);
              if(!userdata.email){
                     return res.status.send('user email not available')
              }
              //Calling controller findUser method return the error or result
              userController.findUser(userdata.email, (err, result)=>{
                     if(err){
                            res.status(400).send('error getting the user', err)
                     }else{
                            res.status(200).send({STATUS:"OK", data:result})
                     }
              })
       }catch(err){
              res.status(500).send(err)
       }
   
})


module.exports = router