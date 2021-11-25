import { useEffect, useState } from "react";
import { Col, Row, Card, Container} from "react-bootstrap";
import axios from "axios";
// import { useNavigate } from "react-router";
// import DashboardDetails from "./DashboardDetails";

export default function Dashboard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .post("/dash/use")
      .then((res) => {
        console.log(res);
        // this.setState({ setUser });
        setUser(res.data)
        // this.setState({events: res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  });



return(
  <>
    <Container>
  <Row>
   {/* <Col><Card body> < a onClick={()=>{toDashboardDetails()}}> DashboardDetails </a></Card></Col> */}
  
 </Row> 
  </Container> 

  </>
)

   {/* let usersID = user.map((users, i) => {
    return (
      <DashboardDetails
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
  return <div>{usersID}</div>; */}
}
