import cn from "classnames";
import { Button } from "common/components";
import { useSelector } from "react-redux";

import { ReactComponent as IconLoad } from "common/icons/refresh.svg";

import styles from "./OrdersLoad.module.css";

export const OrdersLoad = ({
  className,
  children,

  ...props
}) => {
  const orders = useSelector((state) => state.ordersReducer);
  const handleClick = () => {
    console.log(orders);
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
