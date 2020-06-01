import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import './stylesheets/App.scss';

function App() {
  const [colors, setColors] = useState([]);

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

  const rateColor = (id, rating) => {
    const colorsRating = colors.map(color =>
      color.id !== id
        ? color
        : {
            ...color,
            rating
          }
    );
    setColors(colorsRating);
  };

  const removeColor = id => {
    const colorsRemove = colors.filter(color => color.id !== id);
    setColors(colorsRemove);
  };
  // const logColor = (title, color) =>
  //   console.log(`New Color: ${title} ${color}`);
  // const logErrFunc = 5;

  const [totalStars, setTotalStars] = useState();

  // const initTotalStars = (value) => {
  //   setTotalStars(value);
  //   return {totalStars};
  // }
  useEffect(() => {
    setTotalStars(5);
  }, [totalStars]);

  const [starsSelected, setStarsSelected] = useState(0);

  const change = starsSelected => setStarsSelected(starsSelected);

  return (
    <div className='App'>
      <AddColorForm onNewColor={addColor} />
      {/* <StarRating
        totalStars={totalStars}
        starsSelected={starsSelected}
        changeRating={change}
      /> */}
      <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
    </div>
  );
}

export default App;
