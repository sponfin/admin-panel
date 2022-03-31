import React from "react";
import cn from "classnames";

import styles from "./Rdio.module.css";

export const Radio = ({ className, name, isNoRadio, ...props }) => {
  const classRadio = cn(styles._, className);

  return (
    <div className={classRadio}>
      <input type="radio" name={name} className={styles.input} />
      {!isNoRadio && <span className={styles.customRadio}></span>}
    </div>
  );
};
