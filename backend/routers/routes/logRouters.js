const express = require("express");

const logRouters = express.Router();

const {getUser,getAllUser,updateUser,addNewUser} = require("../controllers/user");
const { user } = require("../db");

logRouters.get("/",getAllUser);
logRouters.get('/:id',getUser);
logRouters.post('/',addNewUser);
logRouters.put('/',updateUser);

module.exports={logRouters};