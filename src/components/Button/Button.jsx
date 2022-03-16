import React from 'react';
import styles from './Button.module.css';
import sprite from '../../sprite.svg';

function Button() {
  return (
    <button
      className={
        styles[
          'button button_theme_main button_size_large button-group__button'
        ]
      }
    >
      <svg className={styles.icon}>
        <use xlinkHref={`${sprite}#sun`}></use>
      </svg>
      <span className={styles['button__text']}>Text here</span>
    </button>
  );
}

export default Button;
