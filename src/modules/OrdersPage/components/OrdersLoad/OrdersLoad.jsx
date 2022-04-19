import cn from "classnames";
import { Button } from "common/components";
import { useDispatch } from "react-redux";
import { getOrdersActionCreators } from "modules/OrdersPage/actionCreators/getOrdersActionCreators";
import { mockOrders } from "modules/OrdersPage/constants/mockOrders";
import { useSelector } from "react-redux";

import { ReactComponent as IconLoad } from "common/icons/refresh.svg";

import styles from "./OrdersLoad.module.css";

export const OrdersLoad = ({
  className,
  children,

  ...props
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getOrdersActionCreators(mockOrders));
  };

  return (
    <div className={cn(styles._, className)}>
      {children}
      <Button icon={IconLoad} size="large" theme="blue" onClick={handleClick}>
        Загрузка
      </Button>
    </div>
  );
};
