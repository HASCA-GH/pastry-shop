import {midata} from './data'
import Mimenu from './components/Mimenu.js'
import Sectionfotos from './components/Sectionfotos.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <Mimenu/> 
     <Sectionfotos midata={midata}/>
    </div>
  );
}

export default App;
