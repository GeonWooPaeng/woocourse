// https://velog.io/@ywoosang/addEventListener-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0
import { putNums } from "./putNums.js";
import { putModifiers } from "./putModifiers.js";
import { putOperations } from "./putOperations.js";

export default function Calculator() {
  const $digits = document.querySelector(".digits");
  const $modifiers = document.querySelector(".modifiers");
  const $operations = document.querySelector(".operations");

  $digits.addEventListener("click", putNums);
  $modifiers.addEventListener("click", putModifiers);
  $operations.addEventListener("click", putOperations);
}

new Calculator();
