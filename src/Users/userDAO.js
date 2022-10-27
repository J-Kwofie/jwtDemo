const users =  require('./users.json');
const fs = require('fs');

//import users.json file and fs module

//This method will findUser
function findUser(email, done){
    //use filter method to find the user from json file
    const user =  users.filter((u) => u.email === email)[0];
    if(user){
       done(undefined, user) 
    }
    else{
        done("User not found")
    }
}
//This method will register user
function registerUser(userData,done){
   
    //call fileWrite method and write the user in json file
    console.log(users,"dsfh")

    users.push(userData);
    fs.writeFileSync("./src/Users/users.json",  JSON.stringify(users));
    done(undefined, userData)
  
}


module.exports = {
    findUser,registerUser
}