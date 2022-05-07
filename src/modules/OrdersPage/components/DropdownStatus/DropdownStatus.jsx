import cn from "classnames";
import { Input, Dropdown, ControlLabel, Checkbox } from "common/components";

import { useState } from "react";

import styles from "./DropdownStatus.module.css";

// const xor = (arr, item) =>
//   arr.includes(item) ? arr.filter(i => i !== item) : arr.concat(item);

export const DropdownStatus = ({
  className,
  children,
  valueStatus,
  onChangeStatus,
  checkboxStatuses,

  ...props
}) => {
  // const [checkboxStatuses, setCheckboxStatuses] = useState([]);
  const [isDroped, setDroped] = useState(false);

  // const handleChangeCheckboxStatus = ({ target: { value } }) => {
  //   setCheckboxStatuses(xor(checkboxStatuses, value));
  //   if (checkboxStatuses === [])
  //     setCheckboxStatuses((checkboxStatuses = ['Любой']));
  // };

  const handleDropClick = () => {
    setDroped(!isDroped);
  };

  console.log("Чекбоксы в Drop" + checkboxStatuses);

  // valueStatus = checkboxStatuses;

  return (
    <div className={cn(styles._, className)}>
      <Input
        className={styles.input}
        name="statusOrder"
        value={valueStatus}
        onDropClick={handleDropClick}
        isDroped={isDroped}
        placeholder="Выберите статус заказа"
      >
        {isDroped && (
          <Dropdown className={styles.dropdown}>
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Новый"
                  checked={checkboxStatuses.includes("Новый")}
                  hasIcon={true}
                />
              }
              label="Новый"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Расчет"
                  checked={checkboxStatuses.includes("Расчет")}
                  hasIcon={true}
                />
              }
              label="Расчет"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Подтержден"
                  checked={checkboxStatuses.includes("Подтержден")}
                  hasIcon={true}
                />
              }
              label="Подтвержден"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Отложен"
                  checked={checkboxStatuses.includes("Отложен")}
                  hasIcon={true}
                />
              }
              label="Отложен"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Выполнен"
                  checked={checkboxStatuses.includes("Выполнен")}
                  hasIcon={true}
                />
              }
              label="Выполнен"
            />
            <ControlLabel
              className={styles.dropdownControl}
              control={
                <Checkbox
                  onChange={onChangeStatus}
                  value="Отменен"
                  checked={checkboxStatuses.includes("Отменен")}
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
