import { useEffect, useState } from "react";
// import { Col, Row, Card, Container} from "react-bootstrap";
import axios from "axios";
import Dashboard from "./index";

export default function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("/user/user")
      .then((res) => {
        console.log(res);
        this.setState({ setUser });
        // this.setState({events: res.data})
      })
      .catch((err) => {
        console.log(err);

        console.log("Password or User name are Wrong");
      });
  });
  let usersID = user.map((users, i) => {
    return (
      <Dashboard
        key={i}
        nationalId={users.nationalId}
        adminId={users.adminId}
        drivingLicenses={users.drivingLicenses}
        vehicles={users.vehicles}
        trafficViolations={users.trafficViolations}
        passports={users.passports}
        vehicleInsurances={users.vehicleInsurances}
      />
    );
  });
  return <div>{usersID}</div>;
}
