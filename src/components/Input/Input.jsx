import React from 'react';
import cn from 'classnames';
import styles from './Input.module.css';
import { Icons } from '../Icons/Icons';

export const Input = ({ isError = false, isLocked = false }) => {
  const classWrapperInputDate = cn({
    [styles.inputDate]: true,
    [styles.blockWrapper__inputDate]: true,
  });

  const classLabelInput = cn({
    [styles.labelInput]: true,
    [styles.__labelInput]: true,
  });

  const classlInput = cn({
    [styles.input]: true,
    [styles.input_error]: isError,
    [styles.input_locked]: isLocked,
  });

  return (
    <div className={classWrapperInputDate}>
      <label className={classLabelInput} htmlFor="inputDate">
        Дата и время заказа
      </label>

      <div className={styles.wrapper}>
        {/* {isEmpty && ( */}
        <input
          id="inputDate"
          className={classlInput}
          placeholder="Введите"
          type="datetime"
        />
        {/* )} */}
        {/* 
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
        )} */}

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
