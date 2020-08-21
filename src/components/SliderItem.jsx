import React from 'react'

const SliderItem = ({servicio}) => {
    const {id,nombre,foto}=servicio
    return (
        <div className="card">
            <h1>{nombre}</h1>
            <img src={foto}></img>
        </div>
        
      );
}
 
export default SliderItem;