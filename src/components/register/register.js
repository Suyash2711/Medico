import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUpImg from '../../assets/LoginImg.png'
import SignUp from './signup'


const Register = () => {
  return (
      <>
      <div className="constainer mt-3">
        <div className="row">
          <div className="col-md-5">
            <SignUp />
          </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-50"src={SignUpImg} alt="" />
          </div>
        </div>
      </div>
      </>
  )
}

export default Register