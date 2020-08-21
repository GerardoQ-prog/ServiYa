import React, {useState} from 'react'
import Carousel from 'react-elastic-carousel';
import SliderItem from './SliderItem';
import loguito from '../assets/img/loguito.svg'

const breakpoint =[
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 4 },
]


const Slider = () => {
    const [servicios, setServicios]=useState([
        {
            id:1,
            nombre:'Mecanico',
            foto:{loguito}
        },
        {
            id:2,
            nombre:'Mecanico',
            foto:{loguito}
        },
        {
            id:3,
            nombre:'Mecanico',
            foto:{loguito}
        },
        {
            id:4,
            nombre:'Mecanico',
            foto:{loguito}
        },
        {
            id:5,
            nombre:'Mecanico',
            foto:{loguito}
        },
        {
            id:6,
            nombre:'Mecanico',
            foto:{loguito}
        }
    ])
    
    return (  
        <div className="servicios">
        <h1>Servicios</h1>
        <Carousel 
        breakPoints={breakpoint}
        showArrows={false}
        pagination={false}
        enableAutoPlay
        className="slider">
          {
              servicios.map(servicio =>(
                  <SliderItem servicio={servicio} key={servicio.id}></SliderItem>
              ))
          }
        </Carousel>
        </div>
        
    );
}
 
export default Slider;