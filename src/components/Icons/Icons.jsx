import React from 'react';
import sprite from '../../sprite.svg';

export const Icons = ({ name, className }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${sprite}#${name}`}></use>
    </svg>
  );
};
