import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

export const Button = ({
  children,
  className,
  isThemeMain,
  isThemeBlue,
  isThemeBlack,
  isSizeLarge,
  isSizeLargeSquare,
  isSizeSmall,
  isSizeSmallSquare,
  icon: Icon,
  ...props
}) => {
  const classThemeButton = cn(styles._, className, {
    [styles.theme_main]: isThemeMain,
    [styles.theme_blue]: isThemeBlue,
    [styles.theme_black]: isThemeBlack,
    [styles.size_large]: isSizeLarge,

    [styles.size_largeSquare]: isSizeLargeSquare,
    [styles.size_small]: isSizeSmall,

    [styles.size_smallSquare]: isSizeSmallSquare,
  });

  const classStyleIcon = cn(styles.icon, {
    [styles.sizeLargeIcon]: isSizeLarge,
    [styles.sizeSmallIcon]: isSizeSmall,
  });
  return (
    <button className={classThemeButton}>
      {Icon && <Icon className={classStyleIcon} />}

      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
