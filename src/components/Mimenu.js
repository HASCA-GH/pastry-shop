// import logos from './logo.svg';

import React from 'react'

const Mimenu = () => {
  return (
    <div className="nav">
      <div className='logos'>
        <img className="logos" src="logo.svg" alt="Logo" />
      </div>
      <div className='menuarea'>
        <input className="search" type="text" placeholder='Buscar producto...' />
      </div>
    </div>
  )
}

export default Mimenu