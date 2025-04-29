import './App.css';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';
import Interval from './components/Interval';

function App() {

  return (
    <div className="App">
      <h1> Ecercícios Redux (Simples) </h1>
      <div className='linha'> 
        <Interval></Interval>
      </div>
      <div className='linha'> 
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
