

//import jsonwebtoken and config
const jwt = require('jsonwebtoken')
const {AUTH_SECRET} = require('../../config')
//This function verifyToken will verify the token coming from headers 
const verifyToken = (req, res, next) => {
  
  //Getting the authorization header
  const token = req.headers["authorization"];
  console.log(token,"token")
  // Token coming in headers
  if(!token){
    return res.status(403).send("A token is required for authorization");
  }

  //synchronously verify given token using a secret or a public key to get a decoded token 
try{
  const decoded = jwt.verify(token, AUTH_SECRET);
  console.log(decoded,"decode")
  //passing the decoded data of users and passing into claims key
  //Claiims is a custom key in request
  req.claims = decoded
}catch(err) {
  return res.status(401).send("Invalid Token");
}
return next()
};

module.exports = verifyToken;