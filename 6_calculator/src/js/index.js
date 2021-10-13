// https://velog.io/@ywoosang/addEventListener-%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0

const inputList = (list, $num1, $operation) => {
  list.push($num1, $operation);
};

const checkOperation = (e) => {
  let list = [];
  let $num1 = document.querySelector("#total").innerHTML;
  if (e.target.innerHTML === "/") {
    inputList(list, $num1, e.target.innerHTML);
    console.log(list);
    // $num1 = 0;
    // putNum();
  }
  if (e.target.innerHTML === "X") {
    inputList(list, $num1, e.target.innerHTML);
    console.log(list);
  }
  if (e.target.innerHTML === "-") {
    inputList(list, $num1, e.target.innerHTML);
    console.log(list);
  }
  if (e.target.innerHTML === "+") {
    inputList(list, $num1, e.target.innerHTML);
    console.log(list);
  }
  if (e.target.innerHTML === "=") {
  }
};

const clickOperation = () => {
  const $operations = document.querySelectorAll(".operations");

  $operations.forEach(($operation) => {
    $operation.addEventListener("click", (e) => checkOperation(e));
  });
};

const putNum = () => {
  const $digitsBtn = document.querySelectorAll(".digits > button");
  const $total = document.querySelector("#total");

  $digitsBtn.forEach(($digit) => {
    $digit.addEventListener("click", () => {
      if ($total.innerHTML === "0") $total.innerHTML = $digit.innerHTML;
      else if ($total.innerHTML.length < 3)
        $total.innerHTML += $digit.innerHTML;
    });
  });
};

export default function Calculator() {
  putNum();
  clickOperation();
}

new Calculator();
