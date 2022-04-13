import React, { useState } from "react";
import cn from "classnames";

import { ReactComponent as IconXLarge } from "common/icons/x-large.svg";
import { ReactComponent as IconLocked } from "common/icons/locked.svg";

import styles from "./Input.module.css";

export const Input = ({
  isError = false,

  disabled = false,
  placeholder = "Введите",
  type = "text",

  valueInput,
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

  const [value, setValue] = useState("");
  const handleChangeInput = ({ target: { value } }) => {
    setValue(value);
  };

  const hadleClear = ({ target: { value } }) => {
    setValue((value = ""));
  };

  return (
    <div className={classWrapperInputDate}>
      <div className={styles.wrapper}>
        {LeftIcon && <LeftIcon className={styles.iconLeft} />}

        <input
          id={id}
          value={valueInput}
          className={classThemeInput}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          onChange={handleChangeInput}
          {...props}
        />

        {value && (
          <button className={styles.btnClear} onClick={hadleClear}>
            <IconXLarge className={styles.btnClearIcon} />
          </button>
        )}

        {disabled && <IconLocked className={styles.iconLocked} />}
      </div>
    </div>
  );
};
