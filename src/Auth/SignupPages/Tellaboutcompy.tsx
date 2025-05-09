import Signup from '../../assets/signup.png';
import './Tellaboutcompy.scss';
import { useNavigate } from 'react-router-dom';

const Tellaboutcompy = () => {
  const navigate = useNavigate();
  return (
    <div className='Container_0'>
      <div className="sidebar">
        <img src={Signup} alt="Signup" />
      </div>  
      <div className='main'>
        <div className='header'>
          <h3>Step 3/4</h3>          
          <h1>Tell About Your Company</h1>
        </div>
        <div className='form1'> 
          <div className='form-container2'>
            <label className="label">Your Company’s Name</label>
            <input className="input-box" placeholder="Company’s Name" />

            <label className="label">Business Direction</label>
            <select className="select-box">
              <option>IT and programming</option>
              <option>Marketing</option>
              <option>Finance</option>
            </select>

            <label className="label">How many people in your team?</label>
            <div className="team-options">
              <div className="team-box">Only me</div>
              <div className="team-box">2 - 5</div>
              <div className="team-box">6 - 10</div>
              <div className="team-box">11 - 20</div>
              <div className="team-box">21 - 40</div>
              <div className="team-box">41 - 50</div>
              <div className="team-box">51 - 100</div>
              <div className="team-box">101 - 500</div>
            </div>
          </div>
        </div>
        <div className='bt_5'>
          <button onClick={() => navigate('/tellabturslf')}>
            Previous
          </button>
        </div>
        <div className='bt_6'>
          <button onClick={() => navigate('/invitetm')}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tellaboutcompy;