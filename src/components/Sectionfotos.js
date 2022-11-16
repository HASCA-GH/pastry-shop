import React from 'react'
import  Tarjeta from "./Tarjeta";

const Section_fotos = ({filteredList, encontrado}) => {
  return (
    <div className="seccionmain">
      <h1 className='heading'>Sección de Fotos</h1>
      <div className='row'>
      {encontrado 
        ?  //Si hay data 
        (filteredList.map((item)=> (
          <Tarjeta 
              key={item.id} 
              id={item.id} 
              name={item.name} 
              foto={item.foto} 
              descripcion={item.descripcion} 
              precio={item.precio} />
        )))
        : //No hay data
        (
          <div key="01" className='card'>
            <div className='card-header'> 
              <h3><b>Artículo no Encontrado</b></h3>
              <img src={`images/logo.svg`} alt="Logo, artículo no encontrado" />
            </div>
            <div className='card-body'>
              <p>No se encuentra ningún artículo que coincida. Por favor ingrese otro texto para ajustar su búsqueda.</p>
              <br/>
            </div>
          </div>)
  
               
      }
      </div>
    </div>
    )
  }
 
  export default Section_fotos