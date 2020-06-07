import React from 'react';
import StarRating from './StarRating';
import '../stylesheets/Color.scss'

const Color = ({
  title,
  color,
  rating = 0,
  onRemove = f => f,
  onRate1 = f => f
}) => {

  return (
    <section className='color'>
      <h2>{title}</h2>
      <button onClick={onRemove}>X</button>
      <div className='color' style={{ backgroundColor: color, color: 'white' }}>{color}</div>
      <div>
        <StarRating starsSelected={rating} onRate2={(j) => onRate1(j)} />
      </div>
    </section>
  );
  
};

export default Color;
