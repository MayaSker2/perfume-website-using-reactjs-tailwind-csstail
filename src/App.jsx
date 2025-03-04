import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import AppStore from './Component/AppStore/AppStore';
import Testimonial from './Component/Testimonial/Testimonial';
import Footer from './Component/Footer/Footer';
import Banner from './Component/Banner/Banner';

const App = () => {
  useEffect(() =>{
    AOS.init({
      offset:100,
      duration:700,
      easing:"ease-in",
      delay:100,
    });
  });
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/> 
    </div>
  )
}
 
export default App
