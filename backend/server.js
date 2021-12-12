const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
require("dotenv").config();
const db = require('./models/db');
const {User}= require('./models/user')
const jwt = require('jsonwebtoken')
 const {logRouters} = require("./Routers/routes/logRouters")
const app = express();
app.use(express.json());



 app.use("/user",logRouters);
 app.use(cors());
// const authentication = (req,res,next)=>{
// 	if(req.header('Authorization')){
// 		const token = req.header('Authorization').split(' ')[1]

// 		jwt.verify(token,process.env.SECRET,(err,result)=>{
// 			if(err){
// 				console.log(err)
// 				res.json('forbidden')
// 				return
// 			}
// 			req.token = result
// 			next()
// 		})
// 	}else {
// 		console.log('no header')
// 		res.status(404).json('for')
// 	}
// }
// app.get("/posts", authenticateToken, (req, res) => {
// 	res.json(posts.filter((post) => post.username === req.user.name));
//   });
  
//   function authenticateToken(req, res, next) {
// 	const authHeader = req.headers["authorization"];
// 	const token = authHeader && authHeader.split(" ")[1];
// 	if (token == null) return res.sendStatus(401);
  
// 	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
// 	  console.log(err);
// 	  if (err) return res.sendStatus(403);
// 	  req.user = user;
// 	  next();
// 	});
//   }


//app routers

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
