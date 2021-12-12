const express = require("express");

const logRouters = express.Router();

const {getUser,getAllUser,addNewUser,getUserInfo} = require("../controllers/User");

logRouters.get("/",getAllUser);
logRouters.get('/login',getUser);
logRouters.post('/usersdash',getUserInfo);
logRouters.post('/singup',addNewUser);

module.exports={logRouters};