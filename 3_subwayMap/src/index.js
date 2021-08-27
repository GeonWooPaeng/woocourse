//$ 사용이유: 함수랑 변수를 구별하기 위함입니다.
// jquery를 의미한다고 하지만 이러한 이유로 사용한 것이 아닙니다.

//btn 누 를 때마다 station innerHTML = '';로 지우고 리스트 다시 출력하는 식으로 합니다.

import menuBtnClick from "./menu/menuBtn.js";
import printStationList from "./station/printStationList.js";
import inputStationName from "./station/inputStation.js";


// function addSelector() {
//   const $lineStartStationSelector = document.querySelector('#line-start-station-selector');
//   const $lineEndStationSelector = document.querySelector('#line-end-station-selector');
//   const $stationNames = JSON.parse(localStorage.getItem('station'));

//   $stationNames.forEach(($stationName) => {
//     $lineStartStationSelector.insertAdjacentHTML('beforeend', `<option>${$stationName}</option>`);
//     $lineEndStationSelector.insertAdjacentHTML('beforeend', `<option>${$stationName}</option>`);
//   })

// }

// function inputLine() {
//   const $lineNameInput = document.querySelector('#line-name-input');
//   addSelector();
// }



export default function subwayMap() {
  menuBtnClick();
  // printStationList();
  // inputStationName();
  // inputLine();
}

new subwayMap();