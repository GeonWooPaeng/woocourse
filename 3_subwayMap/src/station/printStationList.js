function printStationListTitle($stationList) {
  $stationList.innerHTML = '';
  $stationList.insertAdjacentHTML('beforeend', 
                                  `<th><strong>역 이름</strong></th>
                                  <th><strong>설정</strong></th>
                                  `)
}

export default function printStationList() {
  const $stationList = document.querySelector('.station-list');
  let $stationNames = JSON.parse(localStorage.getItem('station'));
  let stationDataID = 0;

  printStationListTitle($stationList);
  if ($stationNames !== null) {
    $stationNames.forEach((stationName) => {
      $stationList.insertAdjacentHTML('beforeend',
                                          `<tr data-id=${stationDataID}>
                                            <td data-id=${stationDataID}>${stationName}</td>
                                            <td data-id=${stationDataID} class="station-delete-button"><button> 삭제 </button></td>
                                          </tr>`)
      stationDataID += 1;
    });
  }
}
