import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as VArrow } from "common/icons/v_arrow.svg";

import styles from "./TableCell.module.css";

export const TableCell = ({
  className,
  vArrow,
  check,
  num,
  other,
  children,
  ...props
}) => {
  const classCell = cn(styles._, {
    [styles.check]: check,
    [styles.num]: num,
    [styles.other]: other,
  });
  return (
    <div className={classCell}>
      {children}
      {vArrow && <VArrow className={styles.vArrow} />}
    </div>
  );
};
