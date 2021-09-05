import printStationList from "./station/printStationList.js";
import inputStationName from "./station/inputStation.js";
import printLineList from "./line/printLineList.js";
import inputLine from "./line/inputLine.js";
// import makeSectionBtnToEdit from "./section/sectionTitle.js";
import makeSectionManagementTitle from "./section/sectionManagement.js";
import printSectionList from "./section/sectionList.js";
import addSection from "./section/addSection.js";
import deleteSection from "./section/deleteSection.js";

function selectSectionBtn() {
  const $sectionBtns = document.querySelectorAll('.section-line-menu-button');
  const $sectionInput = document.querySelector('.section-input');
  let $sectionLists = document.querySelector('.section-list');

  $sectionInput.innerHTML = '';
  $sectionBtns.forEach(( $sectionBtn ) => {
    let $lineName = $sectionBtn.innerText;
    $sectionBtn.addEventListener('click', () => {
      makeSectionManagementTitle($sectionInput, $lineName);
      printSectionList($lineName);
      deleteSection($lineName);
      addSection($lineName);
    });
    deleteSection($lineName);
  })
  $sectionLists.setAttribute('hidden',true);
}

function makeSectionTitle($sectionManagement) {
  $sectionManagement.innerHTML = '';
  $sectionManagement.insertAdjacentHTML('beforeend',
                                            `<h3>구간을 수정할 노선을 선택해주세요</h3>`)
}

function makeSectionBtnToEdit() {
  const $sectionManagement = document.querySelector('.section-management');
  let $keys = Object.keys(localStorage).sort();
  
  makeSectionTitle($sectionManagement);
  $keys.forEach(( $key ) => {
    if ($key !== 'station') {
      $sectionManagement.insertAdjacentHTML('beforeend',
                                              `<button class="section-line-menu-button">${$key}</button>`)
    }
  })
  selectSectionBtn();
}

export default function init() {
    printStationList();
    inputStationName();
    printLineList();
    inputLine();
    makeSectionBtnToEdit();
    // localStorage.clear();
  }
