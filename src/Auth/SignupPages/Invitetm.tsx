import './Invitetm.scss'
import Signup from '../../assets/signup.png';
import { useNavigate } from 'react-router-dom';


const Invitetm = () => {
  const navigate = useNavigate();
  return (
    
    <div className='Container_0'>
    <div className="sidebar">
    <img src={Signup}/>
   </div>  
      <div className='main'>
        <div className='header'>
          <h3>Step 4/4</h3>          
          <h1>Invite Team Memebers</h1>
        </div>
    <div className='form'>
    <div className="form-container4">
       <label>Member's Email</label>
      <div className="mobile-inputs">
       <input className="input-box" placeholder="9879876543" />
      </div>
      <a href='#'> + Add Another Member </a>
    </div>
</div>
        <div  className='footer'>
          <div className='bt_1'>
            <button  onClick={()=>navigate('/tellaboutcompy')}>
              Previous
            </button>
          </div>
        <div>
          <button disabled>
            Next Step
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Invitetm