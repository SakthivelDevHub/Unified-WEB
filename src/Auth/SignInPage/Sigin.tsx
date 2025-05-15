import './SignIn.scss';
import white from '../../assets/white.png';
import Illustration from '../../assets/Illustration.png';
import { useNavigate } from 'react-router-dom'; 

const Sigin = () => {
  const navigate = useNavigate(); 


  return (
    <main>
      <div className="flex-container-one">
        <div className="topic">
          <div className="head">
            <img className="logo" src={white} />
            <h1>Woorkroom</h1>
          </div>
          <h1>Your place to work Plan. Create. Control.</h1>
          <img className="picture" src={Illustration} />
        </div>
      </div>
      <div className="flex-container-two">
           <h1>Sign In to Woorkroom</h1>
    <form>
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" placeholder="youremail@gmail.com" required />

      <label htmlFor="password">Password</label>
      <div className="input-wrapper">
        <input type="password" id="password" placeholder="Enter the password" required />
        <i className="fa-solid fa-eye fa-xs" style={{color: "#878787"}}></i>
      </div>

      <div className="options">
        <label><input type="checkbox" /> Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>

      <button className="btn" type="submit">Sign In →</button>
    </form>

      <div className="newacc">
      <a href="#" onClick={() => navigate('/signup')}>Don’t have an account?</a>
     </div>
     </div>   
    </main>    
  );
};

export default Sigin;
