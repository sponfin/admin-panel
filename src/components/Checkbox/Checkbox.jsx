import React from 'react';
import cn from 'classnames';

import { ReactComponent as IconCheckmark } from '../../Icons/checkmark.svg';

import styles from './Checkbox.module.css';

export const Checkbox = ({
  type = 'checkbox',
  className,
  classCustomCheckboxLoc,
  id,
  label,
  classlabelLoc,
  htmlFor,

  ...props
}) => {
  const classCheckboxGroup = cn(styles._, className);

  const classCustomCheckbox = cn(styles.customCheckbox, classCustomCheckboxLoc);

  const classlabel = cn(styles.label, classlabelLoc);

  return (
    <div className={classCheckboxGroup}>
      <input type={type} className={styles.input} id={id} />
      <span className={classCustomCheckbox}>
        <div className={styles.icon}>
          <IconCheckmark width="16px" height="16px" fill="#ffffff" />
        </div>
      </span>

      <label className={classlabel} htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};
