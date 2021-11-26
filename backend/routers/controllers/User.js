const {user} = require('../db')


const getAllUser = (req,res)=>{
    res.send(user)                                                                
}
//////////////////////////////////////////////get////////////////////
const getUser = (req,res)=>{
    // console.log(nationalId)
    // console.log(password)
    console.log(req.body)
 const userinfo = user.find((elem)=>{
     return elem.nationalId == req.body.nationalId && elem.passWord == req.body.passWord
      
     })
    //  const userinfo = user.find(elem=>{
    //     return elem.email === data.email && elem.password === data.password
console.log(userinfo);
    if(userinfo){
    res.send(userinfo)
    return
    }
    res.status(404).send("user not found")
}
///////////////////////////get dashbord////////////////////////
// const getUserInfo = (req,res)=>{
//     console.log(typeof user)
//     const foundUser = user.find((elem, i) =>{
//         return elem == req.body.id 
//     })

//     /* .find => element || undefined
//     .filter => [element1, element2], || []
//      */

//     if(foundUser){
//     res.send(foundUser)
//     return
//     }
//     res.status(404).send("user not found")
// }

// const getUserInfo = (req,res)=>{
//     // console.log(nationalId)
//     // console.log(password)
//     console.log(req.body)
//  const userinfo = user.find((elem)=>{
//      return elem.id == req.body.id 
      
//      })
//     //  const userinfo = user.find(elem=>{
//     //     return elem.email === data.email && elem.password === data.password
// console.log(userinfo);
//     if(userinfo){
//     res.send(userinfo)
//     return
//     }
//     res.status(404).send("user not found")
// }
const getUserInfo=(req,res)=>{
    const userId = user.find(({id}) => id === parseInt(req.body.id));
    console.log(userId)
    if(!userId)return res.status(404).send("ERROR USER NOT FOUND");
res.send(userId);
     }
    
////////////////////////////////////////post/////////////////////////

const addNewUser = (req,res)=>{
    const addedUser = {
        nationalId: req.body.nationalid,
        passWord: req.body.password,
      adminId: req.body.adminId,
           drivingLicenses: req.body.drivingLicenses,
          vehicles: req.body.vehicles,
          trafficViolations: req.body.trafficViolations,
          passPorts: req.body.passPorts,
         vehicleInsurances: req.body.vehicleInsurances,


    }

    user.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){

            elem.nationalId=req.body.nationalid;
            elem.passWord=req.body.password;
            elem.adminId=req.body.adminId;
            elem.drivingLicenses=req.body.drivingLicenses;
            elem.vehicles=req.body.vehicles;
            elem.trafficViolations=req.body.trafficViolations;
            elem.passPorts=req.body.passPorts;
            elem.vehicleInsurances=req.body.vehicleInsurances;
          
        }
    })
}

module.exports = {getAllUser,getUser,updateUser,addNewUser,
 getUserInfo
}
