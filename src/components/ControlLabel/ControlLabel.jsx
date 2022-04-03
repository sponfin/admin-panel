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
  const classControllLabelChecked = cn(styles.label, classControllLabel, {
    [styles.labelChecked]: control.props.checked,
  });

  return (
    <label className={cn(styles._, classControl)}>
      {control}
      <span className={classControllLabelChecked}>{label}</span>
    </label>
  );
};
