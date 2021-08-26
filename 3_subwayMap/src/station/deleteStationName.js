export default function deleteStationName() {
    const $stationList = document.querySelector('.station-list');
    const $stationDeleteBtns = $stationList.querySelectorAll('.station-delete-button');

    $stationDeleteBtns.forEach(($stationDeleteBtn, idx) => {
      $stationDeleteBtn.addEventListener('click', () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            let $stationNames = JSON.parse(localStorage.getItem('station'));
            $stationNames.splice($stationDeleteBtn.dataset.id, 1);
            localStorage.setItem('station', JSON.stringify($stationNames));
            $stationList.deleteRow(idx + 1);
      }});
    })
  }