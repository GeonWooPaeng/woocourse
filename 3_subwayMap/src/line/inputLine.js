import addLineSelector from "./addLineSelector.js";
import errorLineName from "./errorLineName.js";
import addLineName from "./addLineName.js";
import deleteLine from "./deleteLine.js";
import printLineList from "./printLineList.js";

function lineStartStationValue() {
  const $lineStartStationSelector = document.querySelector(
    "#line-start-station-selector"
  );
  const value =
    $lineStartStationSelector.options[$lineStartStationSelector.selectedIndex]
      .text;

  return value;
}

function lineEndStationValue() {
  const $lineEndStationSelector = document.querySelector(
    "#line-end-station-selector"
  );
  const value =
    $lineEndStationSelector.options[$lineEndStationSelector.selectedIndex].text;

  return value;
}

export default function inputLine() {
  const $lineNameInput = document.querySelector("#line-name-input");
  const $lineAddBtn = document.querySelector("#line-add-button");

  addLineSelector();
  $lineAddBtn.addEventListener("click", () => {
    const $lineName = $lineNameInput.value;
    const $lineStartStationValue = lineStartStationValue();
    const $lineEndStationValue = lineEndStationValue();

    if (errorLineName($lineName)) {
      addLineName($lineName, $lineStartStationValue, $lineEndStationValue);
    }
    printLineList();
    deleteLine();
  });
  deleteLine();
}
