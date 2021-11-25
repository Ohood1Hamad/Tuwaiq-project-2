const express = require("express");

const logRouters = express.Router();

const {getUser,getAllUser,updateUser,addNewUser,getUserInfo} = require("../controllers/user");
const { user } = require("../db");

logRouters.get("/",getAllUser);
logRouters.post('/login',getUser);
logRouters.post('/',getUserInfo);
logRouters.post('/singup',addNewUser);
 
logRouters.put('/user',updateUser);

module.exports={logRouters};