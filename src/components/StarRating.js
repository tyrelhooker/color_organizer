import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const StarRating = ({ totalStars = 5 }) => {
  const [starsSelected, setStarsSelected] = useState(0);

  const change = starsSelected => setStarsSelected(starsSelected);

  return (
    <div className='star-rating'>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => change(i + 1)}
        />
      ))}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};

StarRating.propTypes = {
  totalStars: PropTypes.number
};

export default StarRating;
