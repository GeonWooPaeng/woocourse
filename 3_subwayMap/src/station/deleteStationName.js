export default function deleteStationName() {
    const $stationDeleteBtns = document.querySelectorAll('.station-delete-button');
    const $stationList = document.querySelector('.station-list');
  
    $stationDeleteBtns.forEach(($stationDeleteBtn, idx) => {
      $stationDeleteBtn.addEventListener('click', () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            let $stationNames = JSON.parse(localStorage.getItem('station'));
            $stationNames.splice($stationDeleteBtn.dataset.id, 1);
            localStorage.setItem('station', JSON.stringify($stationNames));
            $stationList.deleteRow(idx+1);
      }});
    })
  }