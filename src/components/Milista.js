import React from 'react'

const Milista = ({filteredList, encontrado}) => {
 return (
    <div>
      <div>Mylista</div>

      <ul>
        {encontrado 
          ? (filteredList.map((item) => (
            <li key={item.id}>{item.id} {item.name}</li>)))
          : (
              <div key="01" className='card'>
                <div className='card-header'> 
                  <h3><b>Artículo no Encontrado</b></h3>
                  <img src={`images/logo.svg`} alt="Logo, artículo no encontrado" />
                </div>
                <div className='card-body'>
                  <p>No se encuentra ningún artículo que coincida. Por favor ingrese otro texto para ajustar su búsqueda.</p>
                  <br/>
                  {/* <a href="#" className="btn">Mas información</a> */}
                </div>
              </div>
            )
        }
        {/* {filteredList.map((item) => (
            <li key={item.id}>{item.id} {item.name}</li>
            ))} */}
      </ul>
    </div>
    
  )
}

export default Milista