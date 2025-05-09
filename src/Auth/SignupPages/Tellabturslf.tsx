import './Tellabturslf.scss'
import Signup from '../../assets/signup.png';
import { useNavigate } from 'react-router-dom';

const Tellabturslf = () => {
  const navigate = useNavigate();
  return (
  <div className='Container_0'>
    <div className="sidebar">
    <img src={Signup}/>
   </div>  
      <div className='main'>
        <div className='header'>
          <h3>Step 3/4</h3>          
          <h1>Tell About Yourself</h1>
        </div>
      <div className='form'>
        <div className="form-container3">
        <div className="inputgroup" >
      <label htmlFor="service">why will you use the service?</label><br/>
      <select style={{marginTop: "10px"}}>
      <option disabled selected>Select your service</option>
      <option>Work</option>
      <option>Intern</option>
      <option>Trainee</option></select>  
      </div>
      <div className="inputgroup2">
        <label htmlFor="positon">What describe you best?</label><br/>
        <select style={{marginTop: "10px"}}>
          <option disabled selected>Select your role</option>
          <option>UI/UX designer</option>
          <option>Front-End developer</option>
          <option>Backend developer</option>
          <option>Data Analyst</option>
          <option>Ai Enginner</option>
        </select>
      </div>
      <div className='inputgroup3'>
  <label htmlFor="what describe you best?">what describe you best?</label>
    <input type="radio" name="q/a" value={"Yes"}/>Yes
    <input type="radio" name="q/a" value={"No"}/>No
  </div> 
    </div>
</div>
        <div  className='footer'>
          <div className='bt_3'>
            <button  onClick={()=>navigate('/')}>
              Previous
            </button>
          </div>
        <div className='bt_4'>
          <button onClick={()=>navigate('/tellabtcompy')}>
            Next Step
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Tellabturslf