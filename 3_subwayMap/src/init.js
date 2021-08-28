import printStationList from "./station/printStationList.js";
import inputStationName from "./station/inputStation.js";
import errorLineName from "./line/errorLineName.js";
import addLineSelector from "./line/addLineSelector.js";
import printLineList from "./line/printLineList.js";
import addLineName from "./line/addLineName.js";

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

function inputLine() {
  const $lineNameInput = document.querySelector('#line-name-input');
  const $lineAddButton = document.querySelector('#line-add-button');
  
  addLineSelector();
  $lineAddButton.addEventListener('click', () => {
    let $lineName = $lineNameInput.value;
    let $lineStartStationValue = lineStartStationValue();
    let $lineEndStationValue = lineEndStationValue();
    
    if (errorLineName($lineName)) {
      addLineName($lineName, $lineStartStationValue, $lineEndStationValue);
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
