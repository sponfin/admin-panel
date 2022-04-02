import React from "react";
import cn from "classnames";

import styles from "./Input.module.css";

export const Input = ({
  isError = false,

  isDisabled = false,
  placeholder = "Введите",
  type = "text",
  defaultValue,
  value,
  leftIcon: LeftIcon,
  iconClear: IconClear,
  iconLocked: IconLocked,
  id,
  className,
  ...props
}) => {
  const classWrapperInputDate = cn(styles._, className);

  const classThemeInput = cn(styles.input, {
    [styles.inputLeftIcon]: LeftIcon,
    [styles.input_error]: isError,
    [styles.input_locked]: isDisabled,
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
          disabled={isDisabled}
        />

        {defaultValue && (
          <button className={styles.btnClear}>
            <IconClear className={styles.btnClearIcon} />
          </button>
        )}

        {isDisabled && <IconLocked className={styles.iconLocked} />}
      </div>
    </div>
  );
};
