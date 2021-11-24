import React from 'react';
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/lndex";
import Signup from "./components/Signup/Signup";
import Main from "./components/main/index";
import Dashboard from "./components/dashboard/index";
import Header from "./components/header/index";
import Users from './components/dashboard/Dashboard';

const App = () => {
	return( <div>
		<Header/>
	<Routes>
	
	<Route>
<Route path="/" element={<Main/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/decst" element={<Dashboard/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/dashboard" element={<Users/>}/>
</Route>
</Routes>
	
	</div>
	)

};

export default App;
