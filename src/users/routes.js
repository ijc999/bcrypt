// Importing Router module from Express
const { Router } = require("express"); 
// Creating a new instance of Router
const userRouter = Router(); 

// Importing hashPass and comparePass middleware functions from ../middleware
const { hashPass, comparePass } = require("../middleware/"); 

// Importing registerUser and login controller functions from ./controllers
const { registerUser, login } = require("./controllers"); 

// Defining a new POST route for user registration, and attaching hashPass and registerUser middleware functions to it
userRouter.post("/users/register", hashPass, registerUser); 

// Defining a new POST route for user login, and attaching comparePass and login middleware functions to it

userRouter.post("/users/login", comparePass, login); 

// Exporting userRouter module for use in other files
module.exports = userRouter; 
