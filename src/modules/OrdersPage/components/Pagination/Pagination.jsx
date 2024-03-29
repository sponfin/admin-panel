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
  const totalPageCount = Math.ceil(ordersFiltered.length / pageSize);

  const pageNumbers = paginationRange(activePage, totalPageCount);

  const handleClick = ({ currentTarget: { value } }) => {
    if (value !== "...") dispatch(setActivePage(+value));
  };

  return (
    <div className={className}>
      {pageNumbers.map((number, index) => (
        <Button
          className={styles.buttonsPage}
          theme={number === activePage ? "main" : "blue"}
          size="small"
          onClick={handleClick}
          value={number}
          key={index}
        >
          {number}
        </Button>
      ))}
    </div>
  );
};

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
const DOTS = "...";

const paginationRange = (currentPage, totalPageCount, siblingCount = 2) => {
  const totalPageNumbers = siblingCount + 6;
  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  // const limitLeft = Math.max(currentPage - siblingCount, 1);
  // const limitRight = Math.min(currentPage + siblingCount, totalPageCount);

  const limitLeft = currentPage - 2 <= 1 ? 1 : currentPage - 2;
  const limitRight =
    currentPage + 2 >= totalPageCount ? totalPageCount : currentPage + 2;

  const shouldShowLeftDots = limitLeft > 2;
  const shouldShowRightDots = limitRight < totalPageCount - 2;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = range(1, leftItemCount);

    return [...leftRange, DOTS, totalPageCount];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
    return [1, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(limitLeft, limitRight);
    return [1, DOTS, ...middleRange, DOTS, totalPageCount];
  }
};
