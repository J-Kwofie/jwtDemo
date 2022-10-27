const jwt = require("jsonwebtoken")
const {AUTH_SECRET} =  require('../../config')
//import jsonwebtoken and config file

//This function will verify email and password and will return true and false

function verifyUser(userData,userFoundedData){
  if(userData.email === userFoundedData.email && userData.password === userFoundedData.password)
    return true
  else
    return false
}

//This function will create JWT token and return the token
// use the method jwt.sign having two parameters payload and Auth_Secret
function createJWT(userData) {                                                                           
  //create payload
  const payload = {
    role: "USER",
    email: userData.email,
    name: userData.name,
  }
  console.log(jwt)
  const token = jwt.sign(payload, AUTH_SECRET, {
    expiresIn: 3600,
  });
  return token;
  }


  module.exports={
    verifyUser,createJWT
  }