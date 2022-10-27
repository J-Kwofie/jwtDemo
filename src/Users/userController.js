

//import userService
const userServie = require('./userService');

function findUser(email,done){
    //call userService findUser method and pass the parameters
    userServie.findUser(email,(err,result)=>{
        if(err){
            done(err)
        }
        done(undefined,result)
    })
   
}

module.exports = {
    findUser
}