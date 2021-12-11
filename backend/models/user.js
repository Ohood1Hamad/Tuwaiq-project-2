const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  nationalId: { type: Number, required: true },
  passWord: { type: String, required: true },
  userName: { type: String },
  drivingLicenses: {
    issueDate: Date,
    expiryDate: Date,
    issuePlace: String,
    count: Number,
  },
  vehicles: {
    count: Number,
    carType: String,
  },
  trafficViolations: Number,
  trafficViolationpaid: {
    paidViolations: Number,
    unpaidViolations: Number,
  },
  passport: {
    passPortNumber: Number,
    issueDate: Date,
    issuePlace: String,
    expiryDate: Date,
    count: Number,
  },
  nationalAddress: {
    buildingNumber: Number,
    zipCode: Number,
    additionalNumber: Number,
    unitNumber: Number,
  },
  qiyas: {
    examDate: Date,
    totalMarks: Number,
    typeOfTest: String,
    appointmentNumber: Number,
  },
});
userSchema.pre("save", async function () {
  (this.nationalId = this.nationalId),
    (this.userName = this.userName),
    (this.passWord = await bcrypt.hash(this.passWord, 10));
});

module.exports.User = mongoose.model("User", userSchema);
