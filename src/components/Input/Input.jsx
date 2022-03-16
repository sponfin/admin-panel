import React from 'react';
import styles from './Input.module.css';
import sprite from '../../sprite.svg';

function Input1() {
  return (
    <div className={styles.inputDate + styles.blockWrapper__inputDat}>
      <label
        className={styles.labelInput + styles.inputDate__labelInput}
        htmlFor="inputDate"
      >
        Дата и время заказа
      </label>

      <div className={styles.inputDate__wrapper}>
        <input
          id="inputDate"
          className={styles.inputDate__input}
          placeholder="Введите"
        />
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className={styles.inputDate + styles.blockWrapper__inputDat}>
      <label
        className={styles.labelInput + styles.inputDate__labelInput}
        htmlFor="inputDateError"
      >
        Дата и время заказа
      </label>

      <div className={styles.inputDate__wrapper}>
        <input
          id="inputDateError"
          className={styles.inputDate__input + styles.inputDate__input_error}
          placeholder="Введите"
          value="06.12.2021"
          type="datetime"
        />

        <button className={styles.inputDate__btnClear}>
          <svg className={styles.inputDate__iconX}>
            <use xlinkHref={`${sprite}#x-large`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default { Input1, Input2 };
