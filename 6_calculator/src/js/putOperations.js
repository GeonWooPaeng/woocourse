import { findOperation } from "./utils.js";

const divid = ($total, nums) => {
  return ($total.innerHTML = String(Math.floor(nums[0] / nums[1])));
};

const multi = ($total, nums) => {
  return ($total.innerHTML = String(Math.floor(nums[0] * nums[1])));
};

const sub = ($total, nums) => {
  return ($total.innerHTML = String(Math.floor(nums[0] - nums[1])));
};

const add = ($total, nums) => {
  return ($total.innerHTML = String(Math.floor(nums[0] + nums[1])));
};

const checkOperations = (operation) => {
  const $total = document.querySelector("#total");

  let cnt = $total.innerHTML.split("").reduce((cnt, element) => {
    if (isNaN(Number(element))) {
      cnt += 1;
    }
    return cnt;
  }, 0);
  if (cnt === 0) {
    return ($total.innerHTML += operation);
  }
};

const getResult = () => {
  const $total = document.querySelector("#total");
  let operation = findOperation();
  const nums = $total.innerHTML.split(operation).map(Number);

  if (operation === "/") {
    return divid($total, nums);
  } else if (operation === "X") {
    return multi($total, nums);
  } else if (operation === "-") {
    return sub($total, nums);
  } else if (operation === "+") {
    return add($total, nums);
  }
};

export const putOperations = ({ target }) => {
  if (target.innerHTML === "=") {
    return getResult();
  }
  return checkOperations(target.innerHTML);
};
