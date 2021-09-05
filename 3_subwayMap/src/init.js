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
                                              `<button class="section-line-menu-button">${$key}</button>`)
    }
  })
}

function makeSectionManagementTitle($sectionInput, $lineName) {
  $sectionInput.innerHTML = '';
  $sectionInput.insertAdjacentHTML('beforeend',
                                    `<h3>${$lineName} 관리</h3>
                                    <h4>구간 등록</h4>
                                    <select id="section-station-selector"></select>`);
}

function makeSectionInputSelector($lineName) {
  const $sectionSelector = document.querySelector('#section-station-selector');
  let $sectionStations = JSON.parse(localStorage.getItem($lineName));

  $sectionSelector.innerHTML = '';
  $sectionStations.forEach(( $sectionStation ) => {
    $sectionSelector.insertAdjacentHTML('beforeend',
                                          `<option>${ $sectionStation }</option>`)
  })
}

function makeSectionInputNumber($sectionInput) {
  $sectionInput.insertAdjacentHTML('beforeend',
                                    `<input id="section-order-input" placeholder="순서" />
                                    <button type="number" class="section-add-button">등록</button>`)
}

function printSectionListTitle($sectionList) {

  $sectionList.innerHTML = '';
  $sectionList.insertAdjacentHTML('beforeend',
                                    `<th><strong>순서</strong></th>
                                    <th><strong>이름</strong></th>
                                    <th><strong>설정</strong></th>
                                    `)
}

function printSectionList($lineName) {
  const $sectionStations = JSON.parse(localStorage.getItem($lineName));
  let $sectionList = document.querySelector('.section-list');

  printSectionListTitle($sectionList);
  $sectionStations.forEach(( $sectionStation, idx ) => {
    $sectionList.insertAdjacentHTML('beforeend',
                                      `<tr data-section-id=${idx}>
                                        <td data-section-id=${idx}> ${idx} </td>
                                        <td data-section-id=${idx}> ${ $sectionStation } </td>
                                        <td><button data-section-id=${idx} class="section-delete-button"> 노선에서 제거 </button></td>
                                      </tr>`)
  })
}

function selectSectionBtn() {
  const $sectionBtns = document.querySelectorAll('.section-management > button');
  const $sectionInput = document.querySelector('.section-input');

  $sectionInput.innerHTML = '';
  $sectionBtns.forEach(( $sectionBtn ) => {
    $sectionBtn.addEventListener('click', () => {
      let $lineName = $sectionBtn.innerText;

      makeSectionManagementTitle($sectionInput, $lineName);
      makeSectionInputSelector($lineName);
      makeSectionInputNumber($sectionInput);
      printSectionList($lineName);
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
