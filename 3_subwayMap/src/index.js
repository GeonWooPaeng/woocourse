//$ 사용이유: 함수랑 변수를 구별하기 위함입니다.
// jquery를 의미한다고 하지만 이러한 이유로 사용한 것이 아닙니다.

//btn 누 를 때마다 station innerHTML = '';로 지우고 리스트 다시 출력하는 식으로 합니다.

import menuBtnClick from "./menu/menuBtn.js";
import printStationList from "./station/printStationList.js";
import deleteStationName from "./station/deleteStationName.js";

function errorStationName($stationNames, $stationName) {

  if ($stationNames === null) return (0);
  else if ($stationNames.includes($stationName)) {
    window.alert('중복된 지하철 이름 입니다.');
    return (1);
  }
  else if ($stationName.length < 2) {
    window.alert('지하철 이름이 2글자 미만입니다.');
    return (1);
  }
  return (0);
}

function addStationName($stationNames, $stationName) {
  if ($stationNames === null) {
    $stationNames = [];
  }
  $stationNames.push($stationName);
  localStorage.setItem('station', JSON.stringify($stationNames));
}

function inputStationName() {
  const $stationNameInput = document.querySelector('#station-name-input');
  const $stationAddBtn = document.querySelector('#station-add-button');
  
  $stationAddBtn.addEventListener('click', () => {
    let $stationNames = JSON.parse(localStorage.getItem('station'));
    let $stationName = $stationNameInput.value;

    if(!(errorStationName($stationNames, $stationName))) {
      addStationName($stationNames, $stationName);
      printStationList($stationNames);
      // console.log(localStorage);
      // localStorage.clear();
    }
  })
  deleteStationName();
}

export default function subwayMap() {
  menuBtnClick();
  printStationList();
  inputStationName();
}

new subwayMap();