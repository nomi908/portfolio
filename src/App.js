import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import './App.css';
import Aboutme from './Components/Aboutme';
import Myexperts from './Components/Myexperts';
import MyProjects from './Components/MyProjects';
import Mobileprojectsec from './Components/Mobileprojectsec'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import React  from 'react';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={
         <>
           <Hero />
           <Aboutme />
           <Myexperts />
           <MyProjects />
           <Mobileprojectsec />
           <Contact />
         </>        
          
          } />
        <Route path='/about' element={<><Aboutme /><Myexperts /></>} />
        <Route path='/skills' element={<Myexperts />} />
        <Route path='/myprojects' element={<MyProjects />} />
        <Route path='/mobileprojectsec' element={<Mobileprojectsec />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />

      
      {/* <Hero/>
      <Aboutme/>
      <Myexperts/>
      <MyProjects/>
      <Mobileprojectsec/>
      <Contact/>
      <Footer/> */}





    </> 
    
    
    
  );
};

export default App;
