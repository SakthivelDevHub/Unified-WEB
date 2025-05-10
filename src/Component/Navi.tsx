import { Route,Routes } from "react-router-dom"
import Sigin from "../Auth/SignInPage/Sigin"
import AuthSignUpContainer from "../Auth/SignupPages/AuthUPContainer"


const Navi = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Sigin />} />
        <Route path="/signup" element={<AuthSignUpContainer />} />
      </Routes>
    
  )
}

export default Navi