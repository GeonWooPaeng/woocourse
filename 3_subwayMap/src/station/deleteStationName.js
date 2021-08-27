import printStationList from "./printStationList.js";

function deleteTableHtml($dataID) {
  let $stationLists = document.querySelectorAll('.station-list > tbody > tr');

  $stationLists.forEach(($stationList) => {
    if ($stationList.dataset.id === $dataID) {
      $stationList.remove();
    }
  })
}

function findDeleteStationName($dataID) {
  let $stationLists = document.querySelectorAll('.station-list > tbody > tr > td');
  
  for (let i = 0; i < $stationLists.length; i++) {
    if ($stationLists[i].dataset.id === $dataID) {
      return $stationLists[i].innerText;
    }
  }
}

function DeleteStationNameTolocalStorage($dataID) {
  let $stationNames = JSON.parse(localStorage.getItem('station'));
  let $stationDeleteName = findDeleteStationName($dataID);

  $stationNames.splice($stationNames.indexOf($stationDeleteName), 1);
  localStorage.setItem('station', JSON.stringify($stationNames));
}

export default function deleteStationName() {
  const $stationDeleteBtns = document.querySelectorAll('.station-delete-button');

  $stationDeleteBtns.forEach(($stationDeleteBtn) => {
    $stationDeleteBtn.addEventListener('click', () => {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        DeleteStationNameTolocalStorage($stationDeleteBtn.dataset.id);
        deleteTableHtml($stationDeleteBtn.dataset.id);
      }});
    })
  }