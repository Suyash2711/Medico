import react from "react";
import Login from './components/login/login';
import Register from './components/register/register';
import SignUp from './components/register/meDico_register/SignUp';
import NavbarComp from './components/Navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <NavbarComp /> */}
      <Login />
      {/* <Register /> */}
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
