import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import './stylesheets/App.scss';

function App() {
  const [colors, setColors] = useState([]);

  /* Receives data from the AddColorForm Component via a cb() pass via props. Creates a new array using the spread operator to include colors previous state and concatentating with the new user input. Then sets colors state. */
  const addColor = (title, color) => {
    const newColors = [
      ...colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ];
    setColors(newColors);
  };

  /* Receives data from ColorList Component via a cb()
  */
  const rateColor = (id, rating) => {
    console.log(`first rating: ${rating}`)
    const colorsRating = colors.map(color => 
      
      
      color.id !== id
        ? color
        : {
            ...color,
            rating
          }
        
    );
    setColors(colorsRating);
    console.trace('tracing colors');
  };

  const removeColor = id => {
    const colorsRemove = colors.filter(color => color.id !== id);
    setColors(colorsRemove);
  };

  const [totalStars, setTotalStars] = useState();

  useEffect(() => {
    setTotalStars(5);
  }, [totalStars]);

  return (
    <div className='App'>
      <AddColorForm onNewColor={addColor} />
      <ColorList 
        colors={colors} 
        onRate={rateColor} 
        onRemove={removeColor} 
      />
    </div>
  );
}

export default App;
