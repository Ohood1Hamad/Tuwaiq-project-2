import React from 'react';
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/lndex";
import Signup from "./components/Signup/Signup";
import Main from "./components/main/index";
import Dashboard from "./components/dashboard/index";
 import Contact from "./components/contact/contactus";
 import Howwork from './components/howto/Howto';
 import Aboutus from './components/About/About';

const App = () => {
	return( <div>
		
	<Routes>
	
	<Route>
<Route path="/" element={<Main/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/decst" element={<Dashboard/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Howwork" element={<Howwork/>}/>
<Route path="/Aboutus" element={<Aboutus/>}/>
{/* <Route path="/dashboard" element={<Users/>}/> */}
{/* <Route path="/dashboard" element={<Users/>}/>
<Route path="/dashboard" element={<Users/>}/>
<Route path="/dashboard" element={<Users/>}/> */}
</Route>
</Routes>
	
	</div>
	)

};

export default App;
