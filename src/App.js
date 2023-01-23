import {useState} from 'react'
import CalculationOverview from './Components/CalculationOverview'
import Input from "./Components/Input"
import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Multiplied by two app</h1>
      
      <Input />

      <CalculationOverview />
    </div>
  );
}

export default App;
