//$ 사용이유: 함수랑 변수를 구별하기 위함입니다.
// jquery를 의미한다고 하지만 이러한 이유로 사용한 것이 아닙니다.

function makeMenuBtn() {
    const $title = document.querySelector('#app');

    $title.innerHTML += `
                        <div class="menu-button">
                            <button id="station-manager-button">1. 역 관리</button>
                            <button id="line-manager-button">2. 노선 관리</button>
                            <button id="section-manager-button">3. 구간 관리</button>
                            <button id="map-print-manager-button">4. 지하철 노선도 출력</button>
                        <br/>`
}

function menuBtnClick() {
    const $menuBtn = document.querySelector('#app > div.menu-button');

    $menuBtn.addEventListener('click', ({ target }) => {
        if (target.id === 'station-manager-button') {
            //station part
            // stationHtml();
            removeStationHidden();
        }
        // else if (target.id === 'line-manager-button') {
        //     //line part
        // }
        // else if (target.id === 'section-manager-button') {
        //     //section part
        // }
        // else if (target.id === 'map-print-manager-button') {
        //     //map print part
        // }
    })
}

function setStationHidden() {
    const $station = document.querySelector('#app > div.station');

    $station.setAttribute('hidden', true);
}

function removeStationHidden() {
    const $station = document.querySelector('#app > div.station');

    $station.removeAttribute('hidden');
}

function errorStationName(errorCnt) {
    if (errorCnt === 1) {
        alert('중복된 지하철 역 이름입니다.');
    }
    else if (errorCnt === 2) {
        alert('지하철 역은 2글자 이상이어야 합니다.');
    }
}

function checkStationName($subway, stationName) {
    let key;

    for (key of Object.keys($subway.stations)) {
        if (key === stationName) {
            return (1);
        }
    }
    if (stationName.length < 2) {
        return (2);
    }
    return (0);
}

function printStationList($subway) {
    //객체({}) -> 배열([])사용
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/is_not_iterable
    const $stationTable = document.querySelector('.station > div:last-child > table');
    let staionName;

    for (staionName of Object.keys($subway.stations)) {
        $stationTable.insertAdjacentHTML('beforeend',
                                      `<tr>
                                        <td>${staionName}</td>
                                        <td><button class="station-delete-button"> 삭제 </button>
                                      </tr>`);
    }
}

function printStationListTitle($title) {
    const $station = $title.querySelector('.station');

    $station.insertAdjacentHTML('beforeend',
                                `<div>
                                    <h2> 지하철 역 목록 </h2>
                                    <table id="station-table" border="1">
                                        <th><strong> 역 이름 </strong></th>
                                        <th><strong> 설정 </strong></th>
                                    </table>
                                </div>`);
}

function addStationList(stationName) {
  const $stationTable = document.querySelector('.station > div:last-child > table');

  $stationTable.insertAdjacentHTML('beforeend',
                              `<tr>
                                <td>${stationName}</td>
                                <td><button class="station-delete-button"> 삭제 </button></td>
                              </tr>`
                              )
}

function getStationData($subway) {
    const $stationNameInput = document.querySelector('#station-name-input');
    const $stationAddBtn = document.querySelector('#station-add-button');

    $stationAddBtn.addEventListener('click', () => {
        let stationName = $stationNameInput.value;
        let checkError = checkStationName($subway, stationName);
        if (checkError !== 0) {
            errorStationName(checkError);
            $stationNameInput.value = '';
        }
        else {
            $subway.stations[stationName] = `${stationName}`;
            addStationList(stationName);
        }
    })
}

function deleteStationList($subway) {
  const $stationTable = document.querySelector('#station-table');
  const $stationTableLists = $stationTable.querySelectorAll('tbody');

  $stationTableLists.forEach(($list, idx) => {
    const $deleteBtn = $list.querySelector('button');
    console.log($list);
    if ($deleteBtn !== null) {
      $deleteBtn.addEventListener('click', () => {
        let deleteStationName = $list.querySelector('td:first-child').innerHTML;
        console.log(deleteStationName);
        $stationTable.deleteRow(idx);
        delete $subway.stations[deleteStationName];
        console.log($subway);
      });
    }
  })

}

function stationHtml($subway) {
    const $title = document.querySelector('#app');

    $title.insertAdjacentHTML('beforeend', 
                `<div class="station" >
                    <div><strong> 역 이름 </strong></div>
                    <input type="text" id="station-name-input" 
                        placeholder="역 이름을 입력해주세요">
                    <button id="station-add-button">역 추가</button>
                </div>`
        );
    printStationListTitle($title);
    printStationList($subway, $title);
    setStationHidden();
}

export default function subwayMap() {
    let $subway = {
        stations: {a:'aaa', b:'bbb', c:'ccc'},
        lines: {},
        sections: {}
    };
    makeMenuBtn();
    menuBtnClick();
    stationHtml($subway);
    getStationData($subway);
    deleteStationList($subway);
}

new subwayMap();