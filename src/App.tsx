import { BrowserRouter } from 'react-router-dom';
// import Sigin from './Auth/SignInPage/Sigin';
import UnifiedLayout from './Auth/SignInPage/unified_screen/pages/UnifiedLayout';
// import Sigin from './Auth/SignInPage/Sigin';
// import Validurph from './Auth/SignupPages/Validurph';
// import Tellabturslf from './Auth/SignupPages/Tellabturslf';
// import Tellaboutcompy from './Auth/SignupPages/Tellaboutcompy';
// import Invitetm from './Auth/SignupPages/Invitetm';

function App() {
  return (
    <BrowserRouter>
      <UnifiedLayout/>
    </BrowserRouter>
  );
}

export default App;
