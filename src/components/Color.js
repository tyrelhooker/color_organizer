import React from 'react';
import StarRating from './StarRating';
import '../stylesheets/Color.scss'

const Color = ({
  title,
  color,
  rating = 0,
  onRemove = f => f,
  onRate = f => f
}) => {
  return (
    <section className='color'>
      <h2>{title}</h2>
      <button onClick={onRemove}>X</button>
      <div className='color' style={{ backgroundColor: color, color: 'white' }}>{color}</div>
      <div>
        <StarRating starsSelected={rating} onRate={onRate} />
      </div>
    </section>
  );
};

export default Color;
