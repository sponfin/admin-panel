import cn from "classnames";
import { Button } from "common/components";

import { ReactComponent as IconLoad } from "common/icons/refresh.svg";

import styles from "./OrdersLoad.module.css";

export const OrdersLoad = ({
  className,
  children,

  ...props
}) => {
  return (
    <div className={cn(styles._, className)} {...props}>
      {children}
      <IconLoad className={styles.icon} />
      <Button size="large" theme="blue">
        Загрузка
      </Button>
    </div>
  );
};
