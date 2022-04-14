import React, { useState } from "react";
import cn from "classnames";

import styles from "./TableRow.module.css";

export const TableRow = ({ className, children, ...props }) => {
  return <div className={styles._}>{children}</div>;
};
