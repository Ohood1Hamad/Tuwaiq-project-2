const {user} = require('../db')


const getAllUser = (req,res)=>{
    res.send(user)
}

const getUser = (req,res)=>{
 const userinfo = user.find(i=>{
     return i == req.body.id 
      
     })

    if(userinfo.length > 0){
    res.send(userinfo[0])
    return
    }
    res.status(404).send("user not found")
}

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

module.exports = {getAllUser,getUser,updateUser,addNewUser}
