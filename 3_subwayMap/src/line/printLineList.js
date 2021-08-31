function printLineListTitle($lineLists) {
  $lineLists.innerHTML = '';
  $lineLists.insertAdjacentHTML('beforeend', 
                                  `<th><strong>노선 이름</strong></th>
                                  <th><strong>상행 종점역</strong></th>
                                  <th><strong>하행 종점역</strong></th>
                                  <th><strong>설정</strong></th>
                                  `)
}

export default function printLineList() {
  const $lineLists = document.querySelector('.line-list');
  let keys = Object.keys(localStorage).sort();
  let lineDataID = 0;

  printLineListTitle($lineLists);
  keys.forEach(( key ) => {
    let $lineNames = JSON.parse(localStorage.getItem(key));
    if (key !== 'station' && $lineNames !== null) {
      $lineLists.insertAdjacentHTML('beforeend',
                                      `<tr data-line-id="${lineDataID}">
                                        <td data-line-id="${lineDataID}">${key}</td>
                                        <td data-line-id="${lineDataID}">${$lineNames[0]}</td>
                                        <td data-line-id="${lineDataID}">${$lineNames[$lineNames.length - 1]}</td>
                                        <td><button class="line-delete-button" data-line-id="${lineDataID}">삭제</td>
                                      </tr>`)
      lineDataID += 1;
    }
  })
}