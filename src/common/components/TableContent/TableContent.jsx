import React, { useState } from "react";
import cn from "classnames";

import styles from "./TableContent.module.css";

export const TableContent = ({ className, children, ...props }) => {
  return <div className={styles._}>{children}</div>;
};
