import './SignIn.scss';
import white from '../../assets/white.png';
import Illustration from '../../assets/Illustration.png';
import { useNavigate } from 'react-router-dom'; 

const Sigin = () => {
  const navigate = useNavigate(); 

  return (
    <div className="body">
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
        <h3>Sign In to Woorkroom</h3>
        <br />
        <div className="sign-in">
          <div className="input-group1">
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              placeholder="youremail@gmail.com"
              type="email"
              id="email"
              required
            />
          </div>
          <br />
          <div className="input-group2">
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" required />
          </div>
          <br />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <footer>
          <button className="submit">Sign in →</button>

          {/* ✅ Navigates to sign-up */}
          <a href="#" onClick={() => navigate('/signup')}>
            Don’t have an account?
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Sigin;


{/* <div className="footer">
<div className="remember-me">
  <input type="checkbox" id="remember" />
  <label htmlFor="remember">Remember me</label>
</div>
<div className='f2'>
<button className="submit">
Sign in  → 
</button>
<a href=" ">Dont have an account?</a>
</div>
</div>   */}