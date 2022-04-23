import cn from "classnames";

import { ReactComponent as IconXLarge } from "common/icons/x-large.svg";
import { ReactComponent as IconLocked } from "common/icons/locked.svg";

import styles from "./Input.module.css";

export const Input = ({
  isError = false,

  disabled = false,
  placeholder = "Введите",
  type = "text",
  value,
  leftIcon: LeftIcon,
  id,
  className,
  onChange = () => {},
  onClear = () => {},
  name,
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
          className={classThemeInput}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          onChange={onChange}
          name={name}
          {...props}
        />

        {value && (
          <button className={styles.btnClear} name={name} onClick={onClear}>
            <IconXLarge className={styles.btnClearIcon} />
          </button>
        )}

        {disabled && <IconLocked className={styles.iconLocked} />}
      </div>
    </div>
  );
};
