import React from "react";
import cn from "classnames";

import styles from "./Rdio.module.css";

export const Radio = ({
  className,
  name,
  isNoRadio,
  checked = false,
  onChange = () => {},
  value,

  ...props
}) => {
  const classRadio = cn(styles._, className);

  return (
    <div className={classRadio}>
      <input
        type="radio"
        name={name}
        className={styles.input}
        onChange={onChange}
        value={value}
        checked={checked}
      />
      {!isNoRadio && <span className={styles.customRadio}></span>}
    </div>
  );
};
