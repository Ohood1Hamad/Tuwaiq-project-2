const user = [
  {
    id: 1,
    nationalId: "101012121",
    passWord: "1100",
    adminId: "OHOOD HAMAD AHAMAD",
    update: "12/11/2022",
    drivingLicenses: {
      issueDate: "12/08/2020",
      expiryDate: "12/08/2030",
      issuePlace: "Najran",
      count: 1,
    },
    vehicles: {
      count: 2,
      type: "Hybrid ",
      typeTwo: "Electric ",
    },
    trafficViolations: 15,
    trafficViolationpaid: {
      paidViolations: 9,
      unpaidViolations: 6,
    },
    passport: {
      number: "7896542",
      issueDate: "12/05/2020",
      issuePlace: "Najran",
      expiryDate: "12/05/2025",
      count: 1,
    },
    nationalAddress: {
      buildingNumber: "5478",
      zipCode: "14224",
      additionalNumber: "1236",
      unitNumber: "9",
    },
    qiyas: {
      testDate: "02/10/2020",
      totalMarks: "69",
      typeOfTest: "Teachers",
      appointmentNumber: "1478965",
    },
  },
  {
    id: 2,
    nationalId: "147893256",
    passWord: "1414",
    adminId: "NADA HAMAD AHAMAD",
    update: "04/11/2022",

    drivingLicenses: {
      issueDate: "04/06/2021",
      expiryDate: "12/08/2031",
      issuePlace: "Abha",
      count: 1,
    },
    vehicles: {
      count: 1,
      type: "Audi ",
    },
    trafficViolations: 2,
    trafficViolationpaid: {
      paidViolations: 2,
      unpaidViolations: 0,
    },
    passport: {
      number: "123698745",
      issueDate: "14/08/2018",
      issuePlace: "Abha",
      expiryDate: "14/08/2022",
      count: 1,
    },
    nationalAddress: {
      buildingNumber: "7895",
      zipCode: "78963",
      additionalNumber: "1110",
      unitNumber: "5",
    },
    qiyas: {
      testDate: "05/08/2010",
      totalMarks: "90",
      typeOfTest: "student",
      appointmentNumber: "55889966",
    },
  },
  {
    id: 3,
    nationalId: "1236974581",
    passWord: "7878",
    adminId: "Roronoa Zoro",
    update: "06/11/2022",

    drivingLicenses: {
      issueDate: "12/08/2014",
      expiryDate: "12/08/2024",
      issuePlace: "JAPAN",
      count: 1,
    },
    vehicles: {
      count: 2,
      type: "Sandai Kitetsu ",
      typeTwo: "Enma ",
    },
    trafficViolations: 100,
    trafficViolationpaid: {
      paidViolations: 65,
      unpaidViolations: 35,
    },
    passport: {
      number: "78962541",
      issueDate: "05/12/2015",
      issuePlace: "JAPAN",
      expiryDate: "09/05/2020",
      count: 1,
    },
    nationalAddress: {
      buildingNumber: "1589",
      zipCode: "New-1589",
      additionalNumber: "10000",
      unitNumber: "55",
    },
    qiyas: {
      testDate: "03/05/2019",
      totalMarks: "70",
      typeOfTest: "Executioner",
      appointmentNumber: "963284845",
    },
  },
];
module.exports = { user };
