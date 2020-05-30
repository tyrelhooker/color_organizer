import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddColorForm from './components/AddColorForm';

function App() {
  const logColor = (title, color) => console.log(`New Color: ${title} ${color}`);

  return (
    <div className="App">
      <AddColorForm onNewColor={logColor}/>
    </div>
  );
}

export default App;
