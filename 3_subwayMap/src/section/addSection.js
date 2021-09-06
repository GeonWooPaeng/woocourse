import printSectionList from "./sectionList.js";

function findSectionToSelector() {
  const $sectionStationSelector = document.querySelector(
    "#section-station-selector"
  );
  const value =
    $sectionStationSelector.options[$sectionStationSelector.selectedIndex].text;

  return value;
}

function findSectionToNumber() {
  const $sectionOrderInput = document.querySelector("#section-order-input");

  return $sectionOrderInput.value;
}

function addSectionToLocalStorage(
  $lineName,
  $sectionSelectorValue,
  $sectionOrderInputValue
) {
  const $sectionStations = JSON.parse(localStorage.getItem($lineName));

  $sectionStations.splice($sectionOrderInputValue, 0, $sectionSelectorValue);
  localStorage.setItem($lineName, JSON.stringify($sectionStations));
}

export default function addSection($lineName) {
  const $sectionAddBtn = document.querySelector(".section-add-button");

  $sectionAddBtn.addEventListener("click", () => {
    const $sectionSelectorValue = findSectionToSelector();
    const $sectionOrderInputValue = findSectionToNumber();

    addSectionToLocalStorage(
      $lineName,
      $sectionSelectorValue,
      $sectionOrderInputValue
    );
    printSectionList($lineName);
  });
}
