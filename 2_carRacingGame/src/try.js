import GetResult from "./result.js";

export default function InputTryNum($tryContainer, carName) {
    const $tryNum = $tryContainer.childNodes[3];
    const $tryBtn = $tryContainer.childNodes[5];
  
    $tryBtn.addEventListener('click', () => {
      let carTry = $tryNum.value;
      GetResult(carName, carTry);
    })
  }