import {useState} from 'react'
import MoleContainer from './components/MoleContainer';

import './App.css';

function App() {
  let [score, setScore] = useState(0);

  return (
    <div className="App">
     <MoleContainer />
    </div>
  );
}

export default App;
