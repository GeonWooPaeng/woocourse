import printStationList from "./station/printStationList.js";
import inputStationName from "./station/inputStation.js";

function addSelector() {
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

function inputLine() {
  const $lineNameInput = document.querySelector('#line-name-input');

  addSelector();
}

export default function init() {
    printStationList();
    inputStationName();
    inputLine();

  }
  