
function deleteTableHtml($dataID) {
  let $stationLists = document.querySelectorAll('.station-list > tbody > tr');

  $stationLists.forEach(($stationList) => {
    console.log($stationList);
    if ($stationList.dataset.id === $dataID) {
      $stationList.remove();
    }
  })
}
export default function deleteStationName() {
  const $stationDeleteBtns = document.querySelectorAll('.station-delete-button');

  $stationDeleteBtns.forEach(($stationDeleteBtn) => {
    $stationDeleteBtn.addEventListener('click', () => {
      if (window.confirm('정말로 삭제하시겠습니까?')) {
          let $stationNames = JSON.parse(localStorage.getItem('station'));
          // $stationList.deleteRow($stationDeleteBtn.dataset.id + 1);
          $stationNames.splice($stationDeleteBtn.dataset.id, 1);
          localStorage.setItem('station', JSON.stringify($stationNames));
          deleteTableHtml($stationDeleteBtn.dataset.id);
          console.log(localStorage);
          console.log();
        }});
    })
  }