import { findOperation } from "./utils.js";

const checkNums = () => {
  const $total = document.querySelector("#total");
  const operation = findOperation();

  if (isNaN(Number($total.innerHTML)))
    return $total.innerHTML.split(operation)[1].length < 3;
  return $total.innerHTML.length < 3;
};

export const putNums = ({ target }) => {
  const $total = document.querySelector("#total");
  if ($total.innerHTML === "0") {
    return ($total.innerHTML = target.innerHTML);
  }
  if (checkNums()) {
    $total.innerHTML += target.innerHTML;
  }
};
