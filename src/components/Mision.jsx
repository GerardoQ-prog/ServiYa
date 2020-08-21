import React from 'react';
import servimecanico from '../assets/img/servimecanico.jpg'
import servicarpintero from '../assets/img/servicarpintero.jpg'
 const Mision = () => {
     return (
         <div className=" row contenedor__mision " >
             <div className="mision col-6 ">
                <h1 className="mision__title">Misión</h1>
                <h3 className="mision__text">Te ahorraremos el tiempo de salir de casa y buscar dicho servicio que requieras, ¡AQUI LO PUEDES ENCONTRAR! </h3>

             </div>
             <div className="fotos__mision col-6">
              <img src={servimecanico} className="foto1"></img>
              <img src={servicarpintero} className="foto2"></img>
             </div>
         </div>
       );
 }
  
 export default Mision;