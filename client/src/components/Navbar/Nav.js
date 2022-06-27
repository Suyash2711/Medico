import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Explore from './Explore';
import Home from './Home';
import Login from './Login';
import navimg from '../../assets/Login-image.svg';


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function NavbarComp() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar bg="light ">
            <Container>
              <Navbar.Brand as={Link} to={"/home"}>
                <img
                  src={navimg}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="navbar-logo"
                />
              </Navbar.Brand>
            </Container>
        </Navbar>
          <Container>
            <Navbar.Brand as={Link} to={"/home"} style={{color: "red", fontWeight: "bold", 
              fontSize: "25px"}}>MéDICO</Navbar.Brand>
              <div className="nav-right">
                <Nav>
                  <Nav.Link as={Link} to={"/home"}>HOME</Nav.Link>
                  <Nav.Link as={Link} to={"/explore"}>EXLORE</Nav.Link>
                  <Nav.Link as={Link} to={"/login"}>LOGIN</Nav.Link>
                </Nav>
              </div>
          </Container>
        </Navbar>
      </div>

      <div>
       <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/explore" element={<Explore />} />
          <Route path="/login"element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavbarComp