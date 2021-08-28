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
    return (0);
  }
  return (1);
}

function addLine($lineName, $lineStartStationValue, $lineEndStationValue) {
  let $lineNames = JSON.parse(localStorage.getItme($lineName));

  if ($lineNames === null) {
    $lineNames = [];
  }
  $lineNames.push($lineStartStationValue);
  $lineNames.push($lineEndStationValue);
  localStorage.setItem($lineName, JSON.stringify($lineNames));
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
    deleteLine();
  })
}

export default function init() {
    printStationList();
    inputStationName();
    inputLine();
    // localStorage.clear();
  }
