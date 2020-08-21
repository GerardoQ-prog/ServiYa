import React from 'react';
import grid from '../assets/img/cuadrito.svg'
const Nosotros = () => {
    return ( 
        <div className=" row nts">
            <div className="col-2">
            <img src={grid} className="grid"></img>
            </div>
            <div className="col-9 nosotros">
                <div className="nosotros__subtitle">Conoce un poco sobre </div>
                <div className="nosotros__title">Nosotros...</div>
                <div className="nosotros__content">Somos Serviya  tu Plataforma digital ideal donde podras encontrar diversos servicios cotidianos. Podras escoger entre diversos servicios, el que tu necesites, teniendo a tu disposicion personas especilizadas que te podran ayudar con el problema que tengas. </div>
            </div>
        </div>
     );
}
 
export default Nosotros;