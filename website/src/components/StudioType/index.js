import React from 'react';

const StudioType = ({ type }) => {
  const uType = type.toUpperCase();
  const colorMatch = {
    PRESENTATION: 'rgb(14, 116, 144)',
    RETIRED: 'lightgrey',
    WORKING: 'rgb(13, 100, 81)',
  };
  const color = colorMatch[uType];
  const imgSrc = `https://img.shields.io/badge/Studio_Type-${uType}-${color}?style=for-the-badge`;
  return (
    <p>
      <img height="" width="" src={imgSrc}></img>
    </p>
  );
};

export default StudioType;
