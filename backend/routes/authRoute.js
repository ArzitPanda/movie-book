const express = require('express')
const login =require("../controller/AuthController/login.js")

const AuthRoute = express.Router();




AuthRoute.get("/",login)
module.exports =AuthRoute;