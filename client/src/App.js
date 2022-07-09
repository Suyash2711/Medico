import react from "react";
import Login from "./components/login/login";
import Register from "./components/register/register";
// import SignUp from "./components/register/meDico_register/SignUp";
import NavbarComp from "./components/Navbar/Nav";
import Landing from "./components/landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/Navbar/Explore";
import Register_2 from "./components/register_2/register";
import Patient from "./components/dashboard/patient";
import DashNavbar from "./components/dashboard/dashNavbar";
import Signup from "./components/register/signup";
import Doctor from "./components/Doctor/doctor";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <NavbarComp /> */}
    //     {/* <Routes>
    //       <Route exact path="/" element={<Landing />} />
    //       <Route exact path="/login" element={<Login />} />
    //       <Route exact path="/register" element={<Register />} />
    //       <Route exact path="/explore" element={<Explore />} />
    //       <Route exact path="/signup" element={<Signup />} />
    //       <Route exact path="/home" element={<Landing />} />
    //     </Routes>
    //   </div>
    // </Router>
    <Doctor />
    // <Patient />
  );
}

export default App;
