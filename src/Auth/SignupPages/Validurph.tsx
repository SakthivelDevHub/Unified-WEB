// import React from 'react'clear
import './Validurph.scss'
import white from '../../assets/white.png';
import { useNavigate } from 'react-router-dom';
import Customstep from '../../Component/Customstep'; // Adjust the path as needed
const validurph = () => {
  const navigate = useNavigate();
  return (
    <div className='Container_0'>
    <div className="sidebar">
     <img src ={white}/> 
    <Customstep/>
   </div>  
      <div className='main'>
        <div className='header'>
          <h3>Step 1/4</h3>          
          <h1>Valid your Phone</h1>
        </div>
        <div className='form'>
        <div className="form-container">
        <label>Mobile Number</label>
    <div className="mobile-inputs">
      <select className="select-box">
        <option>+91</option>
        <option>+1</option>
        <option>+44</option>
      </select>
      <input className="input-box" placeholder="9879876543" />
    </div>
    <label>Code from SMS</label>
    <div className="otp-boxes">
      <input className="otp-input" maxLength={1} />
      <input className="otp-input" maxLength={1} />
      <input className="otp-input" maxLength={1} />
      <input className="otp-input" maxLength={1} />
    </div>

    <div className="alert-box">
      <span className="info-icon">i</span>
      <div>
        SMS was sent to your number +1 345 673-56-67<br />
        It will be valid for 01:25
      </div>
    </div>

    <label>Email Address</label>
    <input className="input-box" placeholder="rajesh@gmail.com" />

    <label>Create Password</label>
    <div className="password-box">
      <input className="input-box password-input" placeholder="••••••••" />
      <span className="eye-icon">&#128065;</span>
    </div>
  </div>
       
        </div>
        <div  className='footer'>
          <div className='bt_1'>
            <button onClick={() => navigate('/Signin')}>
              Previous
            </button>
          </div>
        <div className='bt_2' >
          <button onClick={() => navigate('/tellabturslf')}>
            Next Step
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default validurph