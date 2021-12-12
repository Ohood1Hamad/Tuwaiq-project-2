const { User } = require("../../models/user");
const db = require("../../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUser = (req, res) => {
  // const id = '61b4d4d2b027356140377012'
  User.findOne({ User })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
/////////////////////////get////////////////////


const getUser = (req, res) => {
  const { nationalId, passWord } = req.body;

  const user = User.findOne({ nationalId: nationalId })
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
    });
};
///////////////////////////get dashbord////////////////////////

const getUserInfo = (req, res) => {
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

  const newUser = new User({
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

  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err.message);
    });
};
////////////////////////////////////////post/////////////////////////

const addNewUser = async (req, res) => {
  const { nationalId, passWord } = req.body;
  try {
    const user = await User.create({
      nationalId,
      passWord,
    });
    res.status(202).json(user);
  } catch (err) {
    console.log(err);
    res.status(404).send("error");
  }
};



module.exports = { getAllUser, getUser, addNewUser, getUserInfo };
