import React from "react";
import cn from "classnames";

import { ReactComponent as IconCheckmark } from "common/icons/checkmark.svg";

import styles from "./Checkbox.module.css";

export const Checkbox = ({
  className,
  checked = false,
  onChange = () => {},
  value = "",
  hasIcon,
  ...props
}) => {
  const classCheckBox = cn(styles._, className);

  return (
    <div className={classCheckBox}>
      <input
        type="checkbox"
        className={styles.input}
        checked={checked}
        onChange={onChange}
        value={value}
        hasIcon={hasIcon}
        {...props}
      />

      <span className={styles.customCheckbox}>
        <IconCheckmark className={styles.icon} />
      </span>
    </div>
  );
};
