import './Registd.scss';
import Illustration from '../../assets/Illustration.png';
type props = {
  next :()=> void;
  prev :()=> void

}
const Registd = ({next } : props) => {
  return (
     <main>
        <div className="billboard">
          <img className="picture" src={Illustration} />
           <h2>Your Successfully Registered!</h2>
            <button onClick={next}>Let's Start <i className="fas fa-arrow-right" style={{ color: 'grey' }}></i></button>
        </div>
  </main>    
  )
}

export default Registd