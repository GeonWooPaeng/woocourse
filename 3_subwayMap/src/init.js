import printStationList from "./station/printStationList.js";
import inputStationName from "./station/inputStation.js";

function addLineSelector() {
  const $lineStartStationSelector = document.querySelector('#line-start-station-selector');
  const $lineEndStationSelector = document.querySelector('#line-end-station-selector');
  const $stationNames = JSON.parse(localStorage.getItem('station'));

  $lineStartStationSelector.innerHTML = '';
  $lineEndStationSelector.innerHTML = '';
  if ($stationNames !== null) {
    $stationNames.forEach(($stationName) => {
      $lineStartStationSelector.insertAdjacentHTML('beforeend', `<option>${$stationName}</option>`);
      $lineEndStationSelector.insertAdjacentHTML('beforeend', `<option>${$stationName}</option>`);
    })
  }
}

function lineStartStationValue() {
  const $lineStartStationSelector = document.querySelector('#line-start-station-selector');
  let value = $lineStartStationSelector.options[$lineStartStationSelector.selectedIndex].text;

  return value;
}

function lineEndStationValue() {
  const $lineEndStationSelector = document.querySelector('#line-end-station-selector');
  let value = $lineEndStationSelector.options[$lineEndStationSelector.selectedIndex].text;

  return value;
}


function errorLine($lineName) {
  let keys = Object.keys(localStorage);

  if (keys.includes($lineName)) {
    window.alert('이미 있는 라인 입니다.');
    return (0);
  }
  return (1);
}

function addLine($lineName, $lineStartStationValue, $lineEndStationValue) {
  let $lineNames = JSON.parse(localStorage.getItem($lineName));

  if ($lineNames === null) {
    $lineNames = [];
  }
  $lineNames.push($lineStartStationValue);
  $lineNames.push($lineEndStationValue);
  localStorage.setItem($lineName, JSON.stringify($lineNames));
}

function printLineListTitle($lineLists) {
  $lineLists.innerHTML = '';
  $lineLists.insertAdjacentHTML('beforeend', 
                                  `<th><strong>노선 이름</strong></th>
                                  <th><strong>상행 종점역</strong></th>
                                  <th><strong>하행 종점역</strong></th>
                                  <th><strong>설정</strong></th>
                                  `)
}

function printLineList() {
  const $lineLists = document.querySelector('.line-list');
  let keys = Object.keys(localStorage).sort();
  let lineDataID = 0;

  printLineListTitle($lineLists);
  keys.forEach(( key ) => {
    let $lineNames = JSON.parse(localStorage.getItem(key));
    if (key !== 'station' && $lineNames !== null) {
      $lineLists.insertAdjacentHTML('beforeend',
                                      `<tr>
                                        <td data-line-id="${lineDataID}">${key}</td>
                                        <td data-line-id="${lineDataID}">${$lineNames[0]}</td>
                                        <td data-line-id="${lineDataID}">${$lineNames[0]}</td>
                                        <td><button class="line-delete-button" data-line-id="${lineDataID}">삭제</td>
                                      </tr>`)
      lineDataID += 1;
    }
  })
}

function inputLine() {
  const $lineNameInput = document.querySelector('#line-name-input');
  const $lineAddButton = document.querySelector('#line-add-button');
  
  addLineSelector();
  $lineAddButton.addEventListener('click', () => {
    let $lineName = $lineNameInput.value;
    let $lineStartStationValue = lineStartStationValue();
    let $lineEndStationValue = lineEndStationValue();
    
    if (errorLine($lineName)) {
      addLine($lineName, $lineStartStationValue, $lineEndStationValue);
    }
    printLineList();
    // deleteLine();
  })
}

export default function init() {
    printStationList();
    inputStationName();
    printLineList();
    inputLine();
    // localStorage.clear();
  }
