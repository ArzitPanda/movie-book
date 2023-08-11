const express = require('express')
const login =require("../controller/AuthController/login.js");
const signup = require('../controller/AuthController/signup.js');
const tokenchecker = require('../middleware/tokenChecker.js');

const AuthRoute = express.Router();




AuthRoute.post("/",login)
AuthRoute.post("/signup/:type",signup)

module.exports =AuthRoute;