import React, { useState } from "react";
import cn from "classnames";

import styles from "./TableCell.module.css";

export const TableCell = ({ className, children, ...props }) => {
  return <div className={styles._}>{children}</div>;
};
