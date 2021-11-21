const {user} = require('../db')


const getAllUser = (req,res)=>{
    res.send(user)
}

const getUser = (req,res)=>{
 const userinfo = user.find(elem=>{
      return elem.nationalid === data.nationalid && elem.password === data.password
      
     })

    if(userinfo.length > 0){
    res.send(userinfo[0])
    return
    }
    res.status(404).send("user not found")
}

const addNewUser = (req,res)=>{
    const addedUser = {
        nationalid: req.body.nationalid,
        password: req.body.password,

    }

    user.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){
            elem.nationalid=req.body.nationalid;
            elem.password=req.body.password
        }
    })
}

module.exports = {getAllUser,getUser,updateUser,addNewUser}
