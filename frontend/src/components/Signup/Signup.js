// import axios from "axios";
// import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";
//  import { useNavigate } from "react-router-dom";


// class Signup extends Component {
//   state = {
//     nationalid: "",
//     password: "",
   
//   };
//    navigate = useNavigate();
//   // this.handleClick = this.handleClick.bind(this);
//   // handleChange = (event) => {
//   //   this.setState({ nationalid: event.target.value });
//   // };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       nationalid: this.state.nationalid,
//       password: this.state.password,
//     };
//     console.log(
//       "" + JSON.stringify({ nationalid: this.nationalid }, { password: this.password })
//     );
//     axios
//       .post("/user",{
//         data
//       })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//          navigate("/home");
//         // window.location.href = '/';
//       })
//       .catch((err) => {
//         console.log(err);

//         console.log("Password or User name are Wrong");
//       });
//   };

//   //   if(userinfo){

//   //     // console.log( data.password);
//   //     console.log(data);
//   //     let users = [];
//   //     users = JSON.parse(localStorage.getItem("users"));
//   //     if(users === null)
//   //     {
//   //       console.log('no users')
//   //       let u= [];
//   //       u.push(data);
//   //       console.log(u);
//   //     localStorage.setItem("users",JSON.stringify(u));

//   //     }
//   //     else{
//   //       users.push(data);
//   //     localStorage.setItem("users",JSON.stringify(users));
//   //     this.setState({
//   //       loggedin:true
//   //     });
//   //     }

//   //   }
//   // }

//   // axios.post(/user){
//   //   res=>{
//   //     if (

//   //     )
//   //   }
//   // }
//   render() {
//     return (
//       <div className="continer">
//         <div className="row">
//           <div className="col-6">
//             <Form>
//               <Form.Group
//                 className="mb-3"
//                 controlId="formBasicEmail"
//                 onSubmit={(e)=>{this.handleSubmit(e)}}
//               >
//                 <Form.Label
                
//                 >
//                   {" "}
//                   Enter Nationalid{" "}
//                 </Form.Label>
//                 <Form.Control type="id" placeholder="Enter Nationalid"  onChange={(event) => {
//                     this.setState({ nationalid: event.target.value })
                   
//                   }} />
//                 <Form.Text className="text-muted"></Form.Text>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label
               
//                 >
//                   Password
//                 </Form.Label>
//                 <Form.Control type="password" placeholder="Password"    onChange={(event) => { this.setState({ password: event.target.value })
//                 }}/>
//               </Form.Group>
//               <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                 <Form.Check type="checkbox" label="Check me out" />
//               </Form.Group>
//               <Button variant="primary" type="submit" >
//                 LogIn
//               </Button>
//             </Form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
