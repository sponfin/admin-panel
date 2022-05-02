export const dateFormat = (date) => {
  if (date !== undefined) {
    const year = date.substr(6, 4);
    const month = date.substr(3, 2);
    const day = date.substr(0, 2);
    const dateParse = year + "-" + month + "-" + day;
    return Date.parse(dateParse);
  }
};
