const userService = require('../Users/userService')
const authService =  require('./authService')
//import the userService and authService module

//This function will registerUser it will take two parameters
//first the userData second the callback
//call the userService finduser method and also the userService register method
function registerUser(userData,done){
    userService.findUser(userData.email, (err, userDataFinded)=>{
      if (err) {
        console.log(err,userData)
        userService.registerUser(userData, (err,result)=>{
          if(result){
            done(undefined,result)
          }else{
            done("Unable to register a user")
          }
        })

      }else{
        console.log(userDataFinded,userData)

          done(undefined, userDataFinded)
        
      }
    })
}

//This function will loginUser 
//Use the method findUser of userService to first verify and if userfound than call
//the createToken method
function loginUser(userData, done) {
  console.log(userData.email,userService)

    userService.findUser(userData.email, (err, userFound)=>{
        console.log(userFound,"gg")

      if(err){
        done(err)

      }
      else{
        const userVerified = authService.verifyUser(userData,userFound)

        if(userVerified){
          const jwtToken = authService.createJWT(userFound)
          console.log(jwtToken,"kkk")

          done(undefined, jwtToken);
        }else{
          done({error: "User not verified"})
        }
      }
      
    })
  }
  loginUser({
    "email": "Charles@abc.com",
    "password": "Charles123"
},()=>{})

module.exports = {
    registerUser,loginUser

}