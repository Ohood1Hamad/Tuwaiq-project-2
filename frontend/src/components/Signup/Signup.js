import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate,Link  } from "react-router-dom";


export default function Signup () {
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e){
  e.preventDefault();
  const data = {
    nationalId: nationalId,
    password: password,
  };
  console.log(
    "" + JSON.stringify({ nationalid: nationalId }, { password: password })
  );
  axios
    .post("/user",{
      data
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
       navigate("/");
      // window.location.href = '/Main';
    })
    .catch((err) => {
      console.log(err);

      console.log("Password or User name are Wrong");
    });
};
return (
  <div className="continer">
    <div className="row">
      <div className="col-6">
    <div className="row">
       <div className="col">Sing up</div>
      <div className="col" > <Link to="/login"> login </Link> </div>
     
      </div>
        
        <Form>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            onSubmit={(e)=>{handleSubmit(e)}}
          >
            <Form.Label
            
            >
              {" "}
              Enter Nationalid{" "}
            </Form.Label>
            <Form.Control type="id" placeholder="Enter Nationalid"  
            onChange={(event) => {
                setNationalId(event.target.value)
               
              }} />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label
           
            >
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={(event) => { setPassword(event.target.value)}}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            LogIn
          </Button>
        </Form>
      </div>
    </div>
  </div>
);
}
  
    
