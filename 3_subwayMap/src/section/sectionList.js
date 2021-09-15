function printSectionListTitle($sectionLists) {
  $sectionLists.innerHTML = '';
  $sectionLists.insertAdjacentHTML(
    'beforeend',
    `<th><strong>순서</strong></th>
                                    <th><strong>이름</strong></th>
                                    <th><strong>설정</strong></th>
                                    `,
  );
}

export default function printSectionList($lineName) {
  const $sectionStations = JSON.parse(localStorage.getItem($lineName));
  const $sectionLists = document.querySelector('.section-list');
  let $sectionDataID = 0;

  printSectionListTitle($sectionLists);
  if ($sectionStations !== null) {
    $sectionStations.forEach(($sectionStation, idx) => {
      $sectionLists.insertAdjacentHTML(
        'beforeend',
        `<tr data-section-id=${$sectionDataID}>
                                          <td data-section-id=${$sectionDataID}> ${idx} </td>
                                          <td data-section-id=${$sectionDataID}> ${$sectionStation} </td>
                                          <td><button data-section-id=${$sectionDataID} class="section-delete-button"> 노선에서 제거 </button></td>
                                        </tr>`,
      );
      $sectionDataID += 1;
    });
  }
  $sectionLists.removeAttribute('hidden');
}
