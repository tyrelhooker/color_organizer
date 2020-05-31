import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import AddColorForm from './components/AddColorForm';
import StarRating from './components/StarRating';

function App() {
  const logColor = (title, color) =>
    console.log(`New Color: ${title} ${color}`);
  // const logErrFunc = 5;

  return (
    <div className='App'>
      <AddColorForm onNewColor={logColor} />
      <StarRating totalStars={10} />
    </div>
  );
}

export default App;
