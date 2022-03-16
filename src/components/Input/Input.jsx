import React from 'react';
import styles from './Input.module.css';
import sprite from '../../sprite.svg';

const Input1 = () => {
  return (
    <div
      className={[styles.inputDate, styles.blockWrapper__inputDate].join(' ')}
    >
      <label
        className={[styles.labelInput, styles.__labelInput].join(' ')}
        htmlFor="inputDate"
      >
        Дата и время заказа
      </label>

      <div className={styles.wrapper}>
        <input id="inputDate" className={styles.input} placeholder="Введите" />
      </div>
    </div>
  );
};

const Input2 = () => {
  return (
    <div
      className={[styles.inputDate, styles.blockWrapper__inputDate].join(' ')}
    >
      <label
        className={[styles.labelInput, styles.__labelInput].join(' ')}
        htmlFor="inputDateError"
      >
        Дата и время заказа
      </label>

      <div className={styles.wrapper}>
        <input
          id="inputDateError"
          className={[styles.input, styles.input_error].join(' ')}
          placeholder="Введите"
          value="06.12.2021"
          type="datetime"
        />

        <button className={styles.btnClear}>
          <svg className={styles.iconX}>
            <use xlinkHref={`${sprite}#x-large`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

const Input3 = () => {
  return (
    <div
      className={[styles.inputDate, styles.blockWrapper__inputDate].join(' ')}
    >
      <label
        className={[styles.labelInput, styles.__labelInput].join(' ')}
        htmlFor="inputDateLocked"
      >
        Дата и время заказа
      </label>

      <div className={styles.wrapper}>
        <input
          id="inputDateLocked"
          className={[styles.input, styles.input_locked].join(' ')}
          value="06.12.2021"
          placeholder="Введите"
          type="datetime"
          disabled
        />
        <svg className={styles.iconLocked}>
          <use xlinkHref={`${sprite}#locked`}></use>
        </svg>
      </div>
    </div>
  );
};

export { Input1, Input2, Input3 };
