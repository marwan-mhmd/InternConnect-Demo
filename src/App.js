import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';  
import Login from './pages/Login';
import Footer from './component/Footer';
import SignUp from './pages/Signup';
import Homepage from './pages/Homepage';
import Company from './pages/Company';
import Student from './pages/Student';
import AllOpportunities from './pages/AllOpportunities';
import Aboutus from './pages/Aboutus';
import Admin from './pages/Admin';
import ProtectedRoute from './component/ProtectedRoute'; 
import Contactus from './pages/Contactus';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';

function App() {
  // const location = useLocation(); 

  // const dashboardRoutes = ['/company', '/student', '/admin'];
  // const hideGlobalFooter = dashboardRoutes.includes(location.pathname);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/allopportunities' element={<AllOpportunities/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/student' element={<ProtectedRoute allowedRole="student"><Student /></ProtectedRoute>}/>
        <Route path='/company' element={<ProtectedRoute allowedRole="company"> <Company /> </ProtectedRoute>} />
        <Route path='/admin'element={<ProtectedRoute allowedRole="admin"><Admin /></ProtectedRoute>} />
        <Route path='/contact' element={<Contactus/>}></Route>
        <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
        <Route path='/resetpassword/:token' element={<Resetpassword/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;