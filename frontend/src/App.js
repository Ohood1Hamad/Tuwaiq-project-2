import React from 'react';
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login/lndex";
import Signup from "./components/Signup/Signup";
import Main from "./components/main/index";
import Header from "./components/header/index";

const App = () => {
	return( <div>
		<Header/>
	<Routes>
	
	<Route>
<Route path="/" element={<Main/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
</Route>
</Routes>
	
	</div>
	)

};

export default App;
