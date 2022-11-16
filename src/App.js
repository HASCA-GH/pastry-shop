// import React from 'react';
import {useState } from 'react';
import {midata} from './data'
import Mimenu from './components/Mimenu.js'
import Sectionfotos from './components/Sectionfotos.js'
// import Milista from './components/Milista';
import './App.css';

// import { Micontext } from "./components/Micontext";
// let midatafiltrada = midata

function App() {
  const [filteredList, setFilteredList] = useState(midata);
  const [encontrado, setEncontrado] = useState(true);
  
  return (
    <div className="App">
      <Mimenu filteredList={filteredList} setFilteredList={setFilteredList} encontrado={encontrado} setEncontrado={setEncontrado}  /> 
      <Sectionfotos filteredList={filteredList} encontrado={encontrado}/>
      {/* <Milista filteredList={filteredList} encontrado={encontrado} /> */}
    </div>
  );
}

export default App;
