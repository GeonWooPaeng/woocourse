import addLineSelector from "./addLineSelector.js";
import errorLineName from "./errorLineName.js";
import addLineName from "./addLineName.js";
import deleteLine from "./deleteLine.js";
import printLineList from "./printLineList.js";

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

export default function inputLine() {
  const $lineNameInput = document.querySelector('#line-name-input');
  const $lineAddBtn = document.querySelector('#line-add-button');
  
  addLineSelector();
  $lineAddBtn.addEventListener('click', () => {
    let $lineName = $lineNameInput.value;
    let $lineStartStationValue = lineStartStationValue();
    let $lineEndStationValue = lineEndStationValue();

    if (errorLineName($lineName)) {
      addLineName($lineName, $lineStartStationValue, $lineEndStationValue);
    }
    printLineList();
    deleteLine();
  })
  deleteLine();
}