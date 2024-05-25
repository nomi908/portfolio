import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import './App.css';
import Aboutme from './Components/Aboutme';
import Myexperts from './Components/Myexperts';
import MyProjects from './Components/MyProjects';
import Mobileprojectsec from './Components/Mobileprojectsec'
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Myexperts/>
      <MyProjects/>
      <Mobileprojectsec/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
