function deleteTableHtml($dataID) {
  let $stationLists = document.querySelectorAll('.station-list > tbody > tr');

  $stationLists.forEach(($stationList) => {
    if ($stationList.dataset.stationId === $dataID) {
      $stationList.remove();
    }
  })
}

function findDeleteStationName($dataID) {
  let $stationLists = document.querySelectorAll('.station-list > tbody > tr > td');
  
  for (let i = 0; i < $stationLists.length; i++) {
    if ($stationLists[i].dataset.stationId === $dataID) {
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
      console.log($stationDeleteBtn);
      if (window.confirm('정말로 삭제하시겠습니까?')) {
        DeleteStationNameTolocalStorage($stationDeleteBtn.dataset.stationId);
        deleteTableHtml($stationDeleteBtn.dataset.stationId);
      }});
    })
  }