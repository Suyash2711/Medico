import React from 'react'
import styles from './signup.module.css';
import image from '../../../assets/LOGIN-BACKGROUND.svg';

const SignUp = () => {
  return (
        <div className={`${styles.container_1} row`}>
            <div className={`${styles.background} col-6`}>
                <img src={image} alt="background" />    
            </div>
            {/* <div className="text">
                MeDico
            </div> */}
            <div className={`${styles.user_info} col-6`}>
                <form action="/do-something">
                    <div className={`${styles.heading}`}>
                        <h1>WELCOME</h1>
                    </div>
                    <div className={`${styles.row_one}`}>
                        <label htmlFor="NAME">NAME </label>
                        <input type="text" placeholder="Enter your name"/>
                    </div>
                    <div className={`${styles.row_two}`}>
                        <label htmlFor="USERNAME">USERNAME </label>
                        <input type="text" placeholder="Enter your username"/>
                    </div >
                    <div className={`${styles.row_three}`}>
                        <label htmlFor="phone">PHONE NO. </label>
                        <input type="tel" placeholder="Enter your phone no."/>
                    </div>
                    <div className={`${styles.row_four}`}>
                        <label htmlFor="DOB">DATE OF BIRTH </label>
                        <input type="date" />
                    </div>
                    <div className={`${styles.row_five}`}>
                        <label htmlFor="GENDER">GENDER </label>
                        <select name="GENDER">
                            <option value="SELECT">SELECT GENDER</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                            <option value="NONE">PREFER NOT TO SAY</option>
                        </select>
                    </div>
                    <div className={`${styles.row_six}`}>
                        <label htmlFor="PASSWORD">PASSWORD </label>
                        <input type="password" placeholder="Enter your password"/>
                    </div>
                    <div className={`${styles.row_seven}`}>
                        <label htmlFor="PASSWORD">RE - ENTER PASSWORD</label>
                        <input type="password" placeholder="Renter your password"/>
                    </div>
                    <div className={`${styles.row_eight}`}>
                        <button>SIGN UP</button>
                    </div> 
                </form>
            </div>
        </div>
  )
}

export default SignUp