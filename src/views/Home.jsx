import React from 'react'
import Loader from '../components/Loader'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Nosotros from '../components/Nosotros';
import Mision from '../components/Mision';
import Slider from '../components/Slider';
const Home = () => {
    return ( 
  
        <>
            <Loader ></Loader >
     
        
        <div className="home">
            <Navbar></Navbar>
            {/* <Carousel></Carousel> */}
            <Nosotros></Nosotros>
            <Mision></Mision>
            <Slider></Slider>
        </div>
        </>
     
        
      
     );
}
 
export default Home;