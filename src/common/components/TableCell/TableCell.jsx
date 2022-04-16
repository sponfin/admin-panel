import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as VArrow } from "common/icons/v_arrow.svg";

import styles from "./TableCell.module.css";

export const TableCell = ({
  className,
  vArrow,
  width,
  flex0,
  children,
  ...props
}) => {
  const classCell = cn(styles._, {
    [styles.flex0]: flex0,
  });
  return (
    <div style={{ minWidth: width }} className={classCell}>
      {children}
      {vArrow && <VArrow className={styles.vArrow} />}
    </div>
  );
};
