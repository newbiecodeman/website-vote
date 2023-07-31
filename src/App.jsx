import {Routes, Route, useLocation} from 'react-router-dom'
import NavbarComponents from './components/NavbarComponents';
import FooterComponents from './components/FooterComponents';

import HomePage from './pages/HomePage';
import kandidatPage from './pages/KelasPage';
import TestimonialPage from './pages/TestimonialPage';
import SyaratKetenPage from './pages/SyaratKetenPage';
import FaqPage from './pages/FaqPage';
import Login from './components/Login';
import Registrasi from './components/Registrasi';
import { useEffect } from 'react';
import Admin from './components/Admin/Admin';



function App() {
  const {pathaname} = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    {pathaname}})

    const location=useLocation();
    const hideNavbar=location.pathname==="/login" || location.pathname==="/registrasi" || location.pathname==="/dashboard" || location.pathname==="/admin"
    const hideSidebar=location.pathname==="/" || location.pathname=== "/kandidat" || location.pathname=== "/testimonial" || location.pathname=== "/faq" || location.pathname=== "/syaratketen" || location.pathname==="/login" || location.pathname==="/registrasi"; 
    return (
  <div>
  {! hideNavbar && <NavbarComponents  /> }

      
  

    <Routes>
      <Route path='/' Component={HomePage}  />
      <Route path='/kandidat' Component={kandidatPage}  />
      <Route path='/testimonial' Component={TestimonialPage}  />
      <Route path='/faq' Component={FaqPage}  />
      <Route path='/syaratketen' Component={SyaratKetenPage}  />
      <Route path='/login' element={<Login/>} />
      <Route path='/registrasi' element={<Registrasi/>} />
      <Route path='/admin' element={<Admin/>} />
      
   
    </Routes>
    <FooterComponents/>
    
    
   
    

   
  </div>
  );
}

export default App
