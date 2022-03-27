import React from 'react';
import cn from 'classnames';

import styles from './Rdio.module.css';

export const Radio = ({
  type = 'radio',
  id,
  className,
  name,
  htmlFor,
  label,
  classCustomRadioLoc,
  classlabelLoc,
  isRadio,
  ...props
}) => {
  const classRadioGroup = cn(styles._, className);
  const classCustomRadio = cn(styles.customRadio, classCustomRadioLoc);
  const classlabel = cn(styles.label, classlabelLoc);

  return (
    <div className={classRadioGroup}>
      <input type={type} name={name} className={styles.input} id={id} />
      {isRadio && <span className={classCustomRadio}></span>}

      <label className={classlabel} htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};
