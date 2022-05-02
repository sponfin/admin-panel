import cn from "classnames";
import { Button } from "common/components";
import { useDispatch } from "react-redux";
import { loadOrders } from "modules/OrdersPage/actions/orders";
import { mockOrders } from "modules/OrdersPage/constants/mockOrders";

import { ReactComponent as IconLoad } from "common/icons/refresh.svg";

import styles from "./OrdersLoad.module.css";

export const OrdersLoad = ({
  className,
  children,

  ...props
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loadOrders(mockOrders));
  };

  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
      <Button icon={IconLoad} size="large" theme="blue" onClick={handleClick}>
        Загрузка
      </Button>
    </div>
  );
};
