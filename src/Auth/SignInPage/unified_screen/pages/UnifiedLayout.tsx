import white from '/src/assets/white.png';
import suprt from '/src/assets/suprt.png';

// Ensure your bundler or framework supports importing images like this.
import './UnifiedLayout.scss'
const UnifiedLayout = () => {
  return (
<section className="layout">
  <section className="navBar">
    <img src= {white}/>
    <section className='btns'>
      <button>Dashboard</button>
      <button>Projects</button>
      <button>Calendar</button>
      <button>Vactions</button>
      <button>Employees</button>
      <button>Messager</button>
      <button>Info Portal</button>    
   </section>
    <footer>
      <div>
      <img src={suprt}/> 
      <button>Support</button></div> 
      <div className='logout'>
      <button>logout</button>
      </div>
    </footer>    
  </section>
 
</section>
   

  )
}

export default UnifiedLayout