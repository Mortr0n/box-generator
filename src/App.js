import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [boxColor, setBoxColor] = useState([]);
  

  return (
    

    <div className="App">
      <Form boxColor={boxColor} setBoxColor={setBoxColor} />
      <Display boxColor={boxColor} />
      
    </div>
  );
}

export default App;
