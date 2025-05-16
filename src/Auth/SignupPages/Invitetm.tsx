import './Invitetm.scss';
import white from '../../assets/white.png';
import Customstep from '../../Component/Customstep'; // Adjust the path as needed
type props = {
  next :()=> void;
  prev :()=> void

}
const Invitetm = ({next , prev} : props) => {
  return (
    <div className='Container_0'>
      <div className="sidebar">
         <img src ={white}/> 
        <Customstep/>
      </div>
      <div className='main'>
        <div className='header'>
          <h3>Step 4/4</h3>
          <h1>Invite Team Members</h1>
        </div>
        <div className='form'>
          <div className="form-container4">
            <label>Member's Email</label>
            <div className="em-inputs">
              <input className="input-box" placeholder="example@email.com" />
            </div>
            <a href='#'>+ Add Another Member</a>
          </div>
        </div>
       <footer>
        <div className='bt_5'>
          <button onClick={prev}>
            Previous
          </button>
        </div>
        <div className='bt_6'>
          <button onClick={next}>
            Next Step
          </button>
        </div>
      </footer> 
      </div>
    </div>
  );
};

export default Invitetm;
