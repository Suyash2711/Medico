import React from 'react'
import Navbar from "../Navbar/navbar"
import styles from "./doctor.module.css";
import image from "../../assets/calander_img.svg"

const Doctor = () => {
  return (
    <div className={styles.doctorDashboard}>
      <Navbar/>
      <div className={styles.container}>
          <div className={styles.doctorInfo_column}>
            <div className={styles.doctor_salutation}>
              <div className={styles.doctor_content}>
                <h3>Hello Doctor <b>ABC</b> !</h3>
                <h5>CARDIOLOGIST</h5>
                <h4>SAINT BONEVENTURE HOSPITAL</h4>
              </div>
              <div className={styles.doctor_photo}>
                <svg height="130" width="250">
                <circle cx="130" cy="73" r="50"/>
                </svg> 
              </div>
            </div>
            <div className={styles.upcoming_appointment_bar}>
              <h2>UPCOMING APPOINTMENTS</h2>
            </div>
            <div className={styles.appointment_date}>
              <div className={styles.appointment_date_content}>
                <h4>25TH JUNE 2022</h4>
                <h4>14:00 - 15:00</h4>
                <h3><b>GENERAL APPOINTMENT</b></h3>
                <a href="#">PATIENT DETAILS</a>
              </div>
              <div className={styles.appointment_date_content_image}>
                <img src={image} alt="IMAGE" />
              </div>
            </div>
          </div>




          <div className={styles.patientInfo_column}>

            <div className={styles.patient_bar}>
              <h2>PATIENT</h2>
            </div>

            <div className={styles.patient_info1}>
              <div className={styles.patient_info1_photo}>
                <svg height="200" width="200">
                <circle cx="130" cy="95" r="69"/>
                </svg> 
              </div>

              <div className={styles.patient_info1_content}>
                <h3>NAME : <b>SUYASH NIGAM</b></h3>
                <h3>GENDER : <b>MALE</b></h3>
                <h3>AGE : <b>21</b></h3>
                <h3>BLOOD GROUP : <b>O+</b></h3>
              </div>
            </div>

            <div className={styles.patient_info2}>
              <div className={styles.patient_info2_photo}>
                <svg height="200" width="200">
                <circle cx="130" cy="95" r="69"/>
                </svg> 
              </div>

              <div className={styles.patient_info2_content}>
                <h3>NAME : <b>OM RAJPUT</b></h3>
                <h3>GENDER : <b>MALE</b></h3>
                <h3>AGE : <b>21</b></h3>
                <h3>BLOOD GROUP : <b>O+</b></h3>
              </div>
            </div>
          </div>
      </div>
    </div>   
  )
}

export default Doctor;