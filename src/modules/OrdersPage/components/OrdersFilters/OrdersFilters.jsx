import cn from "classnames";

import { Button, Input, Label } from "common/components";
import { useDispatch, useSelector } from "react-redux";
import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";
import {
  setValueOrdersFilters,
  clearValueOrdersFilters,
} from "../../actionCreators/ValueOrdersFilters";

import styles from "./OrdersFilters.module.css";

export const OrdersFilters = ({ className, children, ...props }) => {
  const dispatch = useDispatch();
  const { dateFrom, dateTo, status, sumFrom, sumTo } = useSelector(
    getValueOrdersFilters
  );

  const handleChange = ({ target: { name, value } }) => {
    dispatch(setValueOrdersFilters({ name, value }));
  };

  const handleClear = ({ currentTarget: { name } }) => {
    dispatch(clearValueOrdersFilters({ name }));
    console.log("name " + name);
  };
  return (
    <div className={cn(styles._, className)}>
      <div className={styles.wrapperInputDate}>
        <Label className={styles.labelFilters} label="Дата оформления" />
        <Input
          className={styles.inputFiltersDate}
          placeholder="c dd.mm.yyyy"
          onChange={handleChange}
          onClear={handleClear}
          value={dateFrom}
          name="dateFrom"
        />
      </div>
      <div className={styles.wrapperInputDate}>
        <Input
          className={styles.inputFiltersDate}
          placeholder="по dd.mm.yyyy"
          onChange={handleChange}
          onClear={handleClear}
          value={dateTo}
          name="dateTo"
        />
      </div>
      <div className={styles.wrapperInputStatus}>
        <Label className={styles.labelFilters} label="Статус заказа" />
        <Input
          className={styles.inputFiltersStatus}
          value={status}
          name="status"
        />
      </div>
      <div className={styles.wrapperInputStatus}>
        <Label className={styles.labelFilters} label="Сумма заказа" />
        <Input
          className={styles.inputFiltersSum}
          placeholder="с"
          onChange={handleChange}
          onClear={handleClear}
          value={sumFrom}
          name="sumFrom"
        />
      </div>
      <div className={styles.wrapperInputDate}>
        <Input
          className={styles.inputFiltersSum}
          placeholder="по "
          onChange={handleChange}
          onClear={handleClear}
          value={sumTo}
          name="sumTo"
        />
      </div>
      <div className={styles.wrapperApply}>
        <Button theme="blue" size="large">
          Применить
        </Button>
      </div>

      {children}
    </div>
  );
};
