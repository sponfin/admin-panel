import React from "react";
import cn from "classnames";

import { ReactComponent as IconXLarge } from "icons/x-large.svg";
import { ReactComponent as IconLocked } from "icons/locked.svg";

import styles from "./Input.module.css";

export const Input = ({
  isError = false,

  disabled = false,
  placeholder = "Введите",
  type = "text",
  defaultValue,
  value,
  leftIcon: LeftIcon,

  id,
  className,
  ...props
}) => {
  const classWrapperInputDate = cn(styles._, className);

  const classThemeInput = cn(styles.input, {
    [styles.inputLeftIcon]: LeftIcon,
    [styles.input_error]: isError,
    [styles.input_locked]: disabled,
  });

  return (
    <div className={classWrapperInputDate}>
      <div className={styles.wrapper}>
        {LeftIcon && <LeftIcon className={styles.iconLeft} />}

        <input
          id={id}
          value={value}
          defaultValue={defaultValue}
          className={classThemeInput}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          {...props}
        />

        {defaultValue && (
          <button className={styles.btnClear}>
            <IconXLarge className={styles.btnClearIcon} />
          </button>
        )}

        {disabled && <IconLocked className={styles.iconLocked} />}
      </div>
    </div>
  );
};
