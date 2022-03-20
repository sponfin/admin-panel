import React from 'react';
import styles from './Input.module.css';
import sprite from '../../sprite.svg';
import { Icons } from '../Icons/Icons';

export const Input = ({
  isEmpty = true,
  isError = false,
  isLocked = false,
}) => {
  return (
    <div className={styles.inputDate + ' ' + styles.blockWrapper__inputDate}>
      <label
        className={styles.labelInput + ' ' + styles.__labelInput}
        htmlFor="inputDate"
      >
        Дата и время заказа
      </label>

      <div className={styles.wrapper}>
        {isEmpty && (
          <input
            id="inputDate"
            className={styles.input}
            placeholder="Введите"
            type="datetime"
          />
        )}

        {isError && (
          <input
            id="inputDate"
            className={styles.input + ' ' + styles.input_error}
            placeholder="Введите"
            value="06.12.2021"
            type="datetime"
          />
        )}

        {isLocked && (
          <input
            id="inputDateLocked"
            className={styles.input + ' ' + styles.input_locked}
            value="06.12.2021"
            placeholder="Введите"
            type="datetime"
            disabled
          />
        )}

        {isError && (
          <button className={styles.btnClear}>
            <Icons name="x-large" className={styles.iconX} />
          </button>
        )}

        {isLocked && <Icons name="locked" className={styles.iconLocked} />}
      </div>
    </div>
  );
};
