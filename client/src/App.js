import react from "react";
import Login from "./components/login/login";
import Register from "./components/register/register";
import SignUp from "./components/register/meDico_register/SignUp";
import NavbarComp from "./components/Navbar/Nav";
import Landing from "./components/landing/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./components/Navbar/Explore";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
    // <Register />
  );
}

export default App;
