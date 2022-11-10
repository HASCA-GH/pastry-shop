import React, { useEffect } from 'react'
import {midata} from '../data.js'

const Section_fotos = () => {
  
  useEffect(() => {
    // console.log(midata[1])
      // return () => {
      // }
  }, [])
  
  return (
    <div className="seccionmain">
      <h1 className='heading'>Sección de Fotos</h1>
      <div className='row'>
        {midata.map((item)=> (
          <div key={item.id} className='card'>
              <div className='card-header'> 
                <h3><b>{item.name}</b></h3>
                <img src={`images/${item.foto}`} alt={item.name}  />
              </div>
              <div className='card-body'>
                <p>Descripción: {item.descripcion}</p>
                <br/>
                <p>Precio: S/. {item.precio}</p>
                <a href="#" className="btn">Mas información</a>
              </div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  
  export default Section_fotos