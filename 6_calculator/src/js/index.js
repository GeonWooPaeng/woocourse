// https://velog.io/@ywoosang/addEventListener-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

const checkNums = () => {
  const operations = ["/", "X", "-", "+"];
  const $total = document.querySelector("#total");
  const operation = $total.innerHTML
    .split("")
    .find((v) => operations.includes(v));

  if (isNaN(Number($total.innerHTML)))
    return $total.innerHTML.split(operation)[1].length < 3;
  return $total.innerHTML.length < 3;
};

const putNums = ({ target }) => {
  const $total = document.querySelector("#total");
  if ($total.innerHTML === "0") {
    return ($total.innerHTML = target.innerHTML);
  }
  if (checkNums()) {
    $total.innerHTML += target.innerHTML;
  }
};

const putModifiers = () => {
  const $total = document.querySelector("#total");
  $total.innerHTML = "0";
};

const getResult = () => {
  const operations = ["/", "X", "-", "+"];
  const $total = document.querySelector("#total");
  let operation = $total.innerHTML
    .split("")
    .find((v) => operations.includes(v));
};

const putOperations = ({ target }) => {
  const $total = document.querySelector("#total");
  if (target.innerHTML === "=") {
    return getResult();
  }
  return ($total.innerHTML += target.innerHTML);
};

export default function Calculator() {
  const $digits = document.querySelector(".digits");
  const $modifiers = document.querySelector(".modifiers");
  const $operations = document.querySelector(".operations");

  $digits.addEventListener("click", putNums);
  $modifiers.addEventListener("click", putModifiers);
  $operations.addEventListener("click", putOperations);
}

new Calculator();
