const { User } = require("../../models/user");
const db = require("../../models/db");

const getAllUser = (req, res) => {
  res.send(User);
};
//////////////////////////////////////////////get////////////////////
// const getUser = (req, res) => {
//   const userinfo = user.find((elem) => {
//     return (
//       elem.nationalId == req.body.nationalId &&
//       elem.passWord == req.body.passWord
//     );
//   });

//   if (userinfo) {
//     res.send(userinfo);
//     return;
//   }
//   res.status(404).send("user not found");
// };
const getUser = (req, res) => {
  const {
    nationalId,
    passWord,
    
  } = req.body;

 
 const user= User.findOne({ nationalId:nationalId})
    .then((result) => {
      if (result) {

        bcrypt.compare(passWord, result.passWord, (err, result2) => {
          if (err) {
            console.log(err);
            res.json(err);
            return;
          }
          if (result2) {
            const payload = {
              id: result._id,
              nationalId: result.nationalId,
            };
            const options = {
              expiresIn: "3m",
            };

            const secret = process.env.SECRET;

            const token = jwt.sign(payload, secret, options);

            res.status(200).json({ message: "user logged in", token: token });

			
          } else {
            res.status(403).json("password incorrect");
          }
        });
      } else {
        res.status(404).json("username incorrect");
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err.message);
    })
}
///////////////////////////get dashbord////////////////////////

const getUserInfo = (req, res) => {
  const userId = User.find(({ id }) => id === parseInt(req.body.id));
  if (!userId) return res.status(404).send("ERROR USER NOT FOUND");
  res.send(userId);
};

////////////////////////////////////////post/////////////////////////

const addNewUser = async (req, res) => {
  const {
    nationalId,
    passWord,
    userName,
    drivingLicenses,
    vehicles,
    trafficViolations,
    passPorts,
    qiyas,
    vehicleInsurances,
  } = req.body;
  try {
    const user = await User.create({
      nationalId,
      passWord,
      userName,
      drivingLicenses,
      vehicles,
      trafficViolations,
      passPorts,
      qiyas,
      vehicleInsurances,
    });
    res.status(202).json(user);
  } catch (err) {
    console.log(err);
    res.status(404).send("error");
  }
  // user.push(addedUser);

  // res.status(201).send(addedUser);
};

const updateUser = (req, res) => {
  const userId = req.query.id;
  user.forEach((elem, i) => {
    if (i == userId) {
      elem.nationalId = req.body.nationalid;
      elem.passWord = req.body.password;
      elem.adminId = req.body.adminId;
      elem.update = req.body.update;
      elem.drivingLicenses = req.body.drivingLicenses;
      elem.qiyas = req.body.qiyas;
      elem.vehicles = req.body.vehicles;
      elem.trafficViolations = req.body.trafficViolations;
      elem.passPorts = req.body.passPorts;
      elem.vehicleInsurances = req.body.vehicleInsurances;
    }
  });
};

module.exports = { getAllUser, getUser, updateUser, addNewUser, getUserInfo };
