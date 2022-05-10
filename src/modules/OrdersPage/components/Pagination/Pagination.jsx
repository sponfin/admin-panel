import React from "react";
import { Button } from "common/components";
import { useDispatch } from "react-redux";
import { setActivePage } from "../../actions/pagination";

import styles from "./Pagination.module.css";

export const Pagination = ({
  className,
  ordersFiltered,
  pageSize,
  activePage,
}) => {
  const dispatch = useDispatch();
  const countPages = Math.ceil(ordersFiltered.length / pageSize);
  const pageNumbers = [];

  for (let i = 1; i <= countPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = ({ currentTarget: { value } }) => {
    dispatch(setActivePage(+value));
    console.log(value);
  };

  return (
    <div className={className}>
      {pageNumbers.map((number) => (
        <Button
          className={styles.buttonsPage}
          theme={number === activePage ? "main" : "blue"}
          size="small"
          onClick={handleClick}
          value={number}
        >
          {number}
        </Button>
      ))}
    </div>
  );
};
