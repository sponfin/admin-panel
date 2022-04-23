import cn from "classnames";

import { Button, Input, Label } from "common/components";
import { useDispatch, useSelector } from "react-redux";
import { getValueOrdersFilters } from "modules/OrdersPage/selectors/selectors";
import { setValueOrdersFilters } from "../../actionCreators/ValueOrdersFilters";

import styles from "./OrdersFilters.module.css";

export const OrdersFilters = ({ className, children, ...props }) => {
  const valueOrdersFilters = useSelector(getValueOrdersFilters);

  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(setValueOrdersFilters(value));
  };
  return (
    <div className={cn(styles._, className)}>
      <div className={styles.wrapperInputDate}>
        <Label className={styles.labelFilters} label="Дата оформления" />
        <Input
          className={styles.inputFiltersDate}
          placeholder="c dd.mm.yyyy"
          onChange={handleChange}
          value={valueOrdersFilters}
        />
      </div>
      <div className={styles.wrapperInputDate}>
        <Input
          className={styles.inputFiltersDate}
          placeholder="по dd.mm.yyyy"
        />
      </div>
      <div className={styles.wrapperInputStatus}>
        <Label className={styles.labelFilters} label="Статус заказа" />
        <Input className={styles.inputFiltersStatus} value="Любой" />
      </div>
      <div className={styles.wrapperInputStatus}>
        <Label className={styles.labelFilters} label="Сумма заказа" />
        <Input className={styles.inputFiltersSum} placeholder="с" />
      </div>
      <div className={styles.wrapperInputDate}>
        <Input className={styles.inputFiltersSum} placeholder="по " />
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
