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
                                          `<tr data-station-id=${stationDataID}>
                                            <td data-station-id=${stationDataID}>${stationName}</td>
                                            <td><button class="station-delete-button" data-station-id=${stationDataID}> 삭제 </button></td>
                                          </tr>`)
      stationDataID += 1;
    });
  }
}
