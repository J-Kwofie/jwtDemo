

//import the modules that are required
const express = require('express');
const router =  express.Router()

const authController = require('./authController')

//This method post will regiater the use
router.post('/register',(req,res)=>{
  
        try{
                //retrive name, email and password from request body
                const {name,email,password} = req.body;
                if(!(name && email && password)){
                        return res.status(400).send("User required field is missing")
                }
                const userDetails = {
                        name,email,password
                }

                //calling authController registeruser method return the error msg or the result
                authController.registerUser(userDetails,(err,result)=>{
                        if (err) {
                             return   res.status(400).send(err) 
                        }
                        return res.status(201).send({data:result})
                      
                })
        }catch(error){
                res.status(500).send({error:"Unexpected error while registering a user",error})
        }
       

     
  
})

//This method post will login the user once they are registered
router.post('/login',(req,res)=>{
   

        //retrive email and password from req.body
        try{
                const {email, password} = req.body;
                //validate the data coming from the request
                if(!(email && password)){
                        return res.status(400).send('Required inputs are missing')
                }
                const userDetails = {
                        email, password
                }

            //calling the authController login usermethod return the error or the result 
            authController.loginUser(userDetails,(err,result)=>{
                                console.log(req.body)

               if(err){
                return res.status(401).send({err})
               }
               return res.status(200).send({STATUS:"OK", data:result})
            })    
        }catch(error){
                return res.status(500).send("Unexpected error while signing in")
        }
        

})

module.exports = router