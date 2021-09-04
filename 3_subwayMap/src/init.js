import printStationList from "./station/printStationList.js";
import inputStationName from "./station/inputStation.js";
import printLineList from "./line/printLineList.js";
import inputLine from "./line/inputLine.js";

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
                                              `<button class="${$key}">${$key}</button>`)
    }
  })

}

function printSectionTitle($sectionInput, $lineName) {
  $sectionInput.innerHTML = '';
  $sectionInput.insertAdjacentHTML('beforeend',
                                    `<h3>${$lineName} 관리</h3>
                                    <h4>구간 등록</h4>
                                    <select class="${$lineName}"></select>`);
}

function printSectionInputSelector($sectionInput, $lineName) {
  const $sectionSelector = $sectionInput.querySelector('select');
  let $lineNames = JSON.parse(localStorage.getItem($lineName));

  $sectionSelector.innerHTML = '';
  $lineNames.forEach(( $lineName ) => {
    $sectionSelector.insertAdjacentHTML('beforeend',
                                          `<option>${ $lineName }</option>`)
  })
}

function printSectionInputNumber($sectionInput) {
  $sectionInput.insertAdjacentHTML('beforeend',
                                    `<input placeholder="순서" />
                                    <button class="section-number-button">등록</button>`)
}

function selectSectionBtn() {
  const $sectionBtns = document.querySelectorAll('.section-management > button');
  const $sectionInput = document.querySelector('.section-input');

  $sectionInput.innerHTML = '';
  $sectionBtns.forEach(( $sectionBtn ) => {
    $sectionBtn.addEventListener('click', () => {
      let $lineName = $sectionBtn.innerText;

      printSectionTitle($sectionInput, $lineName);
      printSectionInputSelector($sectionInput, $lineName);
      printSectionInputNumber($sectionInput);
      });
    })
}

export default function init() {
    printStationList();
    inputStationName();
    printLineList();
    inputLine();
    makeSectionBtnToEdit();
    selectSectionBtn();
    // localStorage.clear();
  }
