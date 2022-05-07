import cn from "classnames";
import { Input, Dropdown, ControlLabel, Checkbox } from "common/components";

import { useState } from "react";

import styles from "./DropdownStatus.module.css";

const xor = (arr, item) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : arr.concat(item);

export const DropdownStatus = ({
  className,
  children,
  valueStatus,
  ...props
}) => {
  const handleChangeCheckboxStatus = ({ target: { value } }) => {
    setCheckboxStatuses(xor(checkboxStatuses, value));

    console.log(checkboxStatuses);
  };

  const handleDropClick = () => {
    setDroped(!isDroped);
    // alert(isDroped);
  };

  const [checkboxStatuses, setCheckboxStatuses] = useState([]);
  const [isDroped, setDroped] = useState(false);

  return (
    <div className={cn(styles._, className)}>
      <Input
        className={styles.input}
        name="status"
        value={valueStatus}
        onDropClick={handleDropClick}
        isDroped={isDroped}
      >
        {isDroped && (
          <Dropdown className={styles.dropdown}>
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={handleChangeCheckboxStatus}
                  value="new"
                  checked={checkboxStatuses.includes("new")}
                  hasIcon={true}
                />
              }
              label="Новый"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={handleChangeCheckboxStatus}
                  value="calculation"
                  checked={checkboxStatuses.includes("calculation")}
                  hasIcon={true}
                />
              }
              label="Расчет"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={handleChangeCheckboxStatus}
                  value="confirmed"
                  checked={checkboxStatuses.includes("confirmed")}
                  hasIcon={true}
                />
              }
              label="Подтвержден"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={handleChangeCheckboxStatus}
                  value="postponed"
                  checked={checkboxStatuses.includes("postponed")}
                  hasIcon={true}
                />
              }
              label="Отложен"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={handleChangeCheckboxStatus}
                  value="completed"
                  checked={checkboxStatuses.includes("completed")}
                  hasIcon={true}
                />
              }
              label="Выполнен"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={handleChangeCheckboxStatus}
                  value="canceled"
                  checked={checkboxStatuses.includes("canceled")}
                  hasIcon={true}
                />
              }
              label="Отменен"
            />
          </Dropdown>
        )}
      </Input>
    </div>
  );
};
