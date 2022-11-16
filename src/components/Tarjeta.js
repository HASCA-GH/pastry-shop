import Badge from 'react-bootstrap/Badge';
const Tarjeta = ({id, name, foto, descripcion, precio})=> {
    return (
      <div key={id} className='card'>
        <div className='card-header'> 
          <h3><b>{name}</b></h3>
          <img src={`images/${foto}`} alt={name}  />
        </div>
        <div key={id} className='card-body'>
          <p>Descripción: {descripcion}</p>
          <br/>
          
          <Badge id="precio" bg="primary">Precio: S/.{precio}</Badge>{' '}
          <a href="/" className="btn">Mas información</a>
        </div>
      </div>
    )
  }

  export default Tarjeta