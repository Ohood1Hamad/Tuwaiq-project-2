import { useEffect, useState } from "react";


export default function Users() {
  const [adminId, setAdminId] = useState("");
  const [drivingLicenses, setDrivingLicenses]=useState("")
  const [vehicles, setVehicles]=useState("")
  const [trafficViolations, setTrafficViolations]=useState("")
  const [passports, setPassPorts]=useState("")
    
    useEffect(()=> {
       axios.post("/user", {
      data,
    })
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);

      console.log("Password or User name are Wrong");
    }); 
    }
    );
    let usersID=user.map((users) => {
        return(
            
                //           key={prod.id}
                //           imgUrl={prod.imgUrl}
                //           name={prod.name}
                //           price={prod.price}
                //           inCart={prod.inCart}
                //         />
        )
        
    });
    

    return(
        <div>

        </div>
    )

    
}