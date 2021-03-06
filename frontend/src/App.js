import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/lndex";
import Signup from "./components/Signup/Signup";
import Main from "./components/main/index";
import Home from "./components/home/Home";
import DashboardDetails from "./components/dashboard/DashboardDetails";
import Contact from "./components/contact/contactus";
import Howwork from "./components/howto/Howto";
import Aboutus from "./components/About/About";
import NoFound from "./components/NoFound/NoFound";
import Navigation from "./components/navigation/Navigation";
import Dashboard from "./components/dashboard/Dashboard"

const App = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />}>
            <Route path="/main" element={<Main />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Howwork" element={<Howwork />} />
            <Route path="/Aboutus" element={<Aboutus />} />
          </Route>
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/DashDeta" element={<DashboardDetails />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoFound />} />

        </Route>
      </Routes>
    </div>
  );
};

export default App;
