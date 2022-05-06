export const dateStringToMilliseconds = (date) => {
  if (date !== undefined) {
    const year = date.substr(6, 4);
    const month = date.substr(3, 2);
    const day = date.substr(0, 2);
    const dateParse = year + "-" + month + "-" + day;
    return Date.parse(dateParse);
  }
};

export const isRange = (value, from, to, type) => {
  switch (type) {
    case "DATE":
      if (value !== "" && from !== "" && to === "") {
        if (dateStringToMilliseconds(value) >= dateStringToMilliseconds(from))
          return true;
        else return false;
      }
      if (value !== "" && from === "" && to !== "") {
        if (dateStringToMilliseconds(value) <= dateStringToMilliseconds(to))
          return true;
        else return false;
      }
      if (value !== "" && from !== "" && to !== "") {
        if (
          dateStringToMilliseconds(value) >= dateStringToMilliseconds(from) &&
          dateStringToMilliseconds(value) <= dateStringToMilliseconds(to)
        )
          return true;
        else return false;
      }
      if (from === "" && to === "") {
        return true;
      }
    case "SUM":
      if (value !== "" && from !== "" && to === "") {
        if (value >= from) return true;
        else return false;
      }
      if (value !== "" && from === "" && to !== "") {
        if (value <= to) return true;
        else return false;
      }
      if (value !== "" && from !== "" && to !== "") {
        if (value >= from && value <= to) return true;
        else return false;
      }
      if (from === "" && to === "") {
        return true;
      }
  }
};
