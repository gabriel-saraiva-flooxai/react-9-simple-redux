import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Interval from './components/Interval';
import { useState } from 'react';

function App() {

  const [min, setMin] = useState (100)
  const [max, setMax] = useState (1000)

  return (
    <div className="App">
      <h1> Ecercícios Redux (Simples) </h1>
      <div className='linha'> 
        <Interval min={min} max={max} 
          onMinChanged={setMin} onMaxChanged={setMax} ></Interval>
      </div>
      <div className='linha'> 
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
