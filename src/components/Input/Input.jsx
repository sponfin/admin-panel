import React from 'react';
import cn from 'classnames';

import { ReactComponent as IconXLarge } from '../../Icons/x-large.svg';
import { ReactComponent as IconLocked } from '../../Icons/locked.svg';
import { ReactComponent as IconSearch } from '../../Icons/search.svg';

import styles from './Input.module.css';

export const Input = ({
  isError = false,
  isLocked = false,
  isDisabled = false,
  placeholder = 'Введите',
  type = 'datetime',
  value,
  view,
  id,
  className,
  isNotEmpty,

  ...props
}) => {
  const classWrapperInputDate = cn(styles._, className);

  const classThemeInput = cn(styles.input, {
    [styles.inputSearch]: view === 'search',
    [styles.input_error]: isError,
    [styles.input_locked]: isLocked,
  });

  return (
    <div className={classWrapperInputDate}>
      <div className={styles.wrapper}>
        {view === 'search' && (
          <div className={styles.iconSearch}>
            <IconSearch stroke="#459df5" width="16px" height="16px" />
          </div>
        )}

        <input
          id={id}
          value={value}
          className={classThemeInput}
          placeholder={placeholder}
          type={type}
          disabled={isDisabled}
        />

        {isNotEmpty && (
          <button className={styles.btnClear}>
            <IconXLarge stroke="#bad8f5" width="9px" height="9px" />
          </button>
        )}

        {isLocked && (
          <div className={styles.iconLocked}>
            <IconLocked fill="#000000" width="16px" height="16px" />
          </div>
        )}
      </div>
    </div>
  );
};
