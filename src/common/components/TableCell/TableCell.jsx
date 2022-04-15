import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as VArrow } from "common/icons/v_arrow.svg";

import styles from "./TableCell.module.css";

export const TableCell = ({ className, vArrow, children, ...props }) => {
  return (
    <div className={styles._}>
      {children}
      {vArrow && <VArrow className={styles.vArrow} />}
    </div>
  );
};
