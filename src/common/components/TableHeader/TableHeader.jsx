import React, { useState } from "react";
import cn from "classnames";

import styles from "./TableHeader.module.css";

export const TableHeader = ({ className, children, ...props }) => {
  return <div className={styles._}>{children}</div>;
};
