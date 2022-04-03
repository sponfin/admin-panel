import React from "react";
import cn from "classnames";

import { ReactComponent as IconCheckmark } from "icons/checkmark.svg";

import styles from "./Checkbox.module.css";

export const Checkbox = ({
  className,
  checked = false,
  onChange = () => {},
  value = "",
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
      />
      <span className={styles.customCheckbox}>
        <IconCheckmark className={styles.icon} />
      </span>
    </div>
  );
};
