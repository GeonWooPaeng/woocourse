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

function findDeleteLineName($dataID) {
   let $lineNames = document.querySelectorAll('.line-list > tbody > tr > td');

   for (let i = 0; i < $lineNames.length; i++) {
    if ($lineNames[i].dataset.lineId === $dataID) {
      return $lineNames[i].innerText;
    }
   }
}

function deleteLineNameToLocalStorage($dataID) {
  let $lineDeleteName = findDeleteLineName($dataID);

  localStorage.removeItem($lineDeleteName);
  console.log(localStorage);
}

function deleteLineListHTML($dataID) {
  let $lineLists = document.querySelectorAll('.line-list > tbody > tr');

  $lineLists.forEach(( $lineList ) => {
    if ($lineList.dataset.lineId === $dataID) {
      console.log($lineList);
      $lineList.remove();
    } 
  })
}

function deleteLine() {
  let $lineDeleteBtns = document.querySelectorAll('.line-delete-button');

  $lineDeleteBtns.forEach(( $lineDeleteBtn ) => {
    $lineDeleteBtn.addEventListener('click', () => {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        deleteLineNameToLocalStorage($lineDeleteBtn.dataset.lineId);
        deleteLineListHTML($lineDeleteBtn.dataset.lineId);
      }
    })
  })
}

function inputLine() {
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

export default function init() {
    printStationList();
    inputStationName();
    printLineList();
    inputLine();
    // localStorage.clear();
  }
