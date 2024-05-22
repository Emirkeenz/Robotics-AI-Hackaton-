import React from 'react';
import classes from './starRating.module.css';

export default function StarRating({ stars, size }) {
  const styles = {
    width: size + 'px',
    height: size + 'px',
    marginRight: size / 6 + 'px',
  };

  function Star({ number }) {
    const halfNumber = number - 0.5;

    return stars >= number ? (
      <img src="/star-full.svg" style={styles} alt="star-full" />
    ) : stars >= halfNumber ? (
      <img src="/star-half.svg" style={styles} alt="star-half" />
    ) : (
      <img src="/star-empty.svg" style={styles} alt="star-empty" />
    );
  }

  return (
    <div className={classes.rating}>
      {[1, 2, 3, 4, 5].map(number => (
        <Star key={number} number={number} />
      ))}
    </div>
  );
}

StarRating.defaultProps = {
  size: 18,
};