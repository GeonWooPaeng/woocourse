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

// ------------------------ nice_code -------------
// const DISPLAY = document.querySelector("#total");
// const OPERATORS = ["/", "X", "-", "+"];
// const MAXIMUM_DIGITS_LENGTH = 3;

// const clearDisplay = () => {
//   DISPLAY.innerText = "0";
// };

// const putResult = () => {
//   const displayValue = DISPLAY.innerText;
//   const operator = displayValue.split("").find((v) => OPERATORS.includes(v));
//   const operands = displayValue.split(operator);
//   const operations = {
//     "+": (a, b) => Number(a) + Number(b),
//     "-": (a, b) => Number(a) - Number(b),
//     X: (a, b) => Number(a) * Number(b),
//     "/": (a, b) => Math.floor(Number(a) / Number(b)),
//   };
//   if (operands.length === 1) {
//     return;
//   }
//   DISPLAY.innerText = operations[operator](
//     Number(operands[0]),
//     Number(operands[1])
//   );
// };
// const isAbleAddOperator = () => {
//   const displayValue = DISPLAY.innerText;
//   if (DISPLAY.innerText === "0") {
//     return false;
//   }
//   return !Number.isNaN(Number(displayValue[displayValue.length - 1]));
// };
// const putOperator = ({ target }) => {
//   if (target.innerText === "=") {
//     return;
//   }

//   if (!isAbleAddOperator()) {
//     alert("숫자를 먼저 입력한 후 연산자를 입력해 주세요!");
//     return;
//   }
//   DISPLAY.innerText += target.innerText;
// };
// const isValidLength = () => {
//   const displayValue = DISPLAY.innerText;
//   const operator = displayValue.split("").find((v) => OPERATORS.includes(v));

//   if (!operator) {
//     return displayValue.length < MAXIMUM_DIGITS_LENGTH;
//   }
//   return displayValue.split(operator)[1].length < MAXIMUM_DIGITS_LENGTH;
// };

// const putNumber = ({ target }) => {
//   if (!isValidLength()) {
//     return alert("숫자는 세자리 까지만 입력 가능합니다.");
//   }
//   if (DISPLAY.innerText === "0") {
//     return (DISPLAY.innerText = target.innerText);
//   }
//   return (DISPLAY.innerText += target.innerText);
// };

// export default function Calculator() {
//   const $digits = document.querySelector(".digits");
//   const $operations = document.querySelector(".operations");
//   const $equalSign = document.querySelector("#equal-sign");
//   const $modifier = document.querySelector(".modifier");

//   $digits.addEventListener("click", putNumber);
//   $operations.addEventListener("click", putOperator);
//   $equalSign.addEventListener("click", putResult);
//   $modifier.addEventListener("click", clearDisplay);
// }

// window.onload = () => {
//   new Calculator();
// };
