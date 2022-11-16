import React, { useState } from 'react'
import { FcSearch } from "react-icons/fc";
// import { IconName } from "react-icons/fc";
import {midata} from '../data.js'
// FcSearch
// AiOutlineSearch
function  Mimenu ({filteredList, setFilteredList, encontrado, setEncontrado}){
  
  const [searchQuery, setSearchQuery] = useState("");

  //Search list of objects
  const searchHandle = (e)=> {
    const query = e
    setSearchQuery(query)
    
    const searchList = midata.filter((item)=>{
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    searchList.length>0 ? setEncontrado(true) : setEncontrado(false)
    setFilteredList(searchList)
  }

  return (
    <div className="nav">
      <div className='logos'>
        <img className="logos" src="images/logo.svg" alt="Logo" />
      </div>
      <div id="titulo-tienda">
        <p>Pastry-Shop</p>
      </div>
      <div className='menuarea'>
        <div className='menuarea-search'>
          <FcSearch id="fcsearch"/>
          <input 
            className="search" 
            type="text" 
            value={searchQuery}
            placeholder='Buscar producto...' 
            onChange={(e)=> searchHandle(e.target.value)}/>
        </div>
      </div>
    </div>
  )
}

export default Mimenu