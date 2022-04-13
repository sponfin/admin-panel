import React from "react";
import cn from "classnames";

import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  theme,
  size,
  icon: Icon,
  fullWidth,
  ...props
}) => {
  const classButton = cn(styles._, className, {
    [styles[`theme_${theme}`]]: true,
    [styles[`size_${size}`]]: true,
    [styles.iconOnly]: Icon && !children,
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button className={classButton} {...props}>
      {Icon && <Icon className={styles.icon} />}

      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
