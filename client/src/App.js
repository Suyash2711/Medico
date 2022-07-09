import react from "react";
import Login from "./components/login/login";
import Register from "./components/register/register";
import SignUp from "./components/register/meDico_register/SignUp";
import NavbarComp from "./components/navbar/Nav";
import Landing from "./components/landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/navbar/Explore";
import Register_2 from "./components/register_2/register";
import Patient from "./components/dashboard/patient";
import DashNavbar from "./components/dashboard/dashNavbar";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavbarComp /> */}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/signup" element={<Register_2 />} />
          <Route exact path="/home" element={<Landing />} />
        </Routes>
      </div>
    </Router>
    // <NavbarComp />
    // <Patient />
  );
}

export default App;
