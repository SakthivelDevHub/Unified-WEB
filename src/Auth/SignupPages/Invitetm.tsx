import './Invitetm.scss';
import Signup from '../../assets/signup.png';

type Props = {
  prev: () => void;
};

const Invitetm = ({ prev }: Props) => {
  return (
    <div className='Container_0'>
      <div className="sidebar">
        <img src={Signup} />
      </div>
      <div className='main'>
        <div className='header'>
          <h3>Step 4/4</h3>
          <h1>Invite Team Members</h1>
        </div>
        <div className='form'>
          <div className="form-container4">
            <label>Member's Email</label>
            <div className="mobile-inputs">
              <input className="input-box" placeholder="example@email.com" />
            </div>
            <a href='#'>+ Add Another Member</a>
          </div>
        </div>
        <div className='footer'>
          <div className='bt_1'>
            <button onClick={prev}>Previous</button>
          </div>
          <div className='bt_2'>
            <button disabled>Next Step</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitetm;
