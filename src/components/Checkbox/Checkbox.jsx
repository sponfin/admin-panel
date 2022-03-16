import React from 'react';
import styles from './Checkbox.module.css';
import sprite from '../../sprite.svg';

function Checkbox() {
  return (
    <div className={styles['checkbox checkbox-group__checkbox']}>
      <input
        type="checkbox"
        className={styles['checkbox__input']}
        id="checkbox1"
      />
      <span className={styles['checkbox__custom-checkbox']}>
        <svg className={styles['checkbox__icon']}>
          <use xlinkHref={`${sprite}#checkmark`}></use>
        </svg>
      </span>

      <label className={styles['checkbox__label']} htmlFor="checkbox1"></label>
    </div>
  );
}

export default Checkbox;
