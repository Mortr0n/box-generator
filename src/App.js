import './App.css';
import React, { useState } from 'react';
import Form from './components/form';

function App() {
  const [box, setBox] = useState([]);

  return (
    

    <div className="App">
      <Form box={box} setBox={setBox} />
    </div>
  );
}

export default App;
