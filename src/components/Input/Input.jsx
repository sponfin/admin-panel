import React from "react";
import cn from "classnames";

import { ReactComponent as IconXLarge } from "Icons/x-large.svg";
import { ReactComponent as IconLocked } from "Icons/locked.svg";
import { ReactComponent as IconSearch } from "Icons/search.svg";

import styles from "./Input.module.css";

export const Input = ({
  isError = false,

  isDisabled = false,
  placeholder = "Введите",
  type = "text",
  defaultValue,
  value,
  view,
  id,
  className,
  ...props
}) => {
  const classWrapperInputDate = cn(styles._, className);

  const classThemeInput = cn(styles.input, {
    [styles.inputSearch]: view === "search",
    [styles.input_error]: isError,
    [styles.input_locked]: isDisabled,
  });

  return (
    <div className={classWrapperInputDate}>
      <div className={styles.wrapper}>
        {view === "search" && <IconSearch className={styles.iconSearch} />}

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
            <IconXLarge className={styles.btnClearIcon} />
          </button>
        )}

        {isDisabled && <IconLocked className={styles.iconLocked} />}
      </div>
    </div>
  );
};
