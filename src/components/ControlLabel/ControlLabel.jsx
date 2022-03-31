import React from "react";
import cn from "classnames";

import styles from "./ControlLabel.module.css";

export const ControlLabel = ({
  classControllLabel,
  classControl,
  control,
  label,
  ...props
}) => {
  return (
    <label className={cn(styles._, classControl)}>
      {control}
      <span className={cn(styles.label, classControllLabel)}>{label}</span>
    </label>
  );
};
