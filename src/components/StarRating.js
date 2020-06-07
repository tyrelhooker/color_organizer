import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({ 
  totalStars = 5, 
  starsSelected = 0, 
  onRate2 = f => f 
}) => {

  return (
    <div className='star-rating'>
      {/* Can use Array(totalStars).fill() OR Array.from({length: totalStars} in lieu of spread ... operator */}
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          // This handler sets the star rating that is then passed up to the App component through the ColorList prop
          onClick={() => onRate2(i + 1)}
        />
      ))}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
  
};

StarRating.propTypes = {
  totalStars: PropTypes.number,
  starsSelected: PropTypes.number,
  changeRating: PropTypes.func
};

export default StarRating;
