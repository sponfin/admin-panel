import React from "react";
import cn from "classnames";

import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  theme,
  size,
  icon: Icon,
  ...props
}) => {
  const classButton = cn(styles._, className, {
    [styles[`theme_${theme}`]]: true,
    [styles[`size_${size}`]]: true,
    [styles[`size_${size}Square`]]: Icon && !children,
  });

  const classStyleIcon = cn(styles.icon, {
    [styles.sizeLargeIcon]: size === "large" && children,
    [styles.sizeSmallIcon]: size === "small" && children,
  });
  return (
    <button className={classButton}>
      {Icon && <Icon className={classStyleIcon} />}

      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
