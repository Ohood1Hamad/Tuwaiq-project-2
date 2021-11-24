import { useEffect, useState } from "react";
import { Col, Row, Card, Container} from "react-bootstrap";
import axios from "axios";




export default function Users() {
  const [user, setUser] = useState([]);
  
    
    useEffect(()=> {
       axios.get("/user")
    .then((res) => {
      console.log(res);
    this.setState({setUser});
    this.setState({events: res.data})
    })
    .catch((err) => {
      console.log(err);

      console.log("Password or User name are Wrong");
    }); 
    }
    );
     let usersID=user.map((users,i) => {
        return(
            <div key={i}>
<Container>
  <Row>
    <Col><Card body>{users.nationalId}</Card></Col>
    <Col><Card body>{users.adminId}</Card></Col>
  </Row>
  <Row>
    <Col><Card body>This is some text within a card body.</Card></Col>
    <Col><Card body>This is some text within a card body.</Card></Col>
    <Col><Card body>This is some text within a card body.</Card></Col>
  </Row>
</Container>

            </div>  )
      
        
    })
    return(
      <div>
        {usersID}
      </div>
    )
    ;}