import React from "react";
import cn from "classnames";

import styles from "./Dropdown.module.css";

export const Dropdown = ({ children }) => {
  const classDropdownGroup = cn(styles._, styles.dropdownGroup);
  return <div className={classDropdownGroup}>{children}</div>;
};
