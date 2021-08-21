function makeMenuBtn() {
    const $title = document.querySelector('#app');

    $title.innerHTML += `<br/>
                            <div class="menu-button">
                                <button id="station-manager-button">1. 역 관리</button>
                                <button id="line-manager-button">2. 노선 관리</button>
                                <button id="section-manager-button">3. 구간 관리</button>
                                <button id="map-print-manager-button">4. 지하철 노선도 출력</button>
                            </div> 
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
        //     console.log('asdff');
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

    for (key of Object.keys($subway.stationNames)) {
        if (key === stationName) {
            return (1);
        }
    }
    if (stationName.length < 2) {
        return (2);
    }
    return (0);
}

function printStationList($station) {
    //객체({}) -> 배열([])사용
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/is_not_iterable

    for (let [key, value] of Object.entries($station)) {
        
    }
}

function printStationListTitle($station) {
    $station.insertAdjacentHTML('beforeend',
                                `<br/>
                                    <table border="1">
                                        <th><strong> 역 이름 </strong></th>
                                        <th><strong> 설정 </strong></th>
                                    </table>
                                `);
}

function addInputList($station, $stationNames, $stationName) {
    $station.insertAdjacentHTML('beforeend', 
                                `
                                `)
}

function getStationData($subway) {
    const $station = document.querySelector('#app > .station');
    const $stationNameInput = document.querySelector('#station-name-input');
    const $stationAddBtn = document.querySelector('#station-add-button');

    $stationAddBtn.addEventListener('click', () => {
        let stationName = $stationNameInput.value;
        let checkError = checkStationName($subway, stationName);
        if (checkError !== 0) {
            errorStationName(checkError)
            $stationNameInput.value = '';
        }
        else {
            $subway['stationNames'][stationName] = `${stationName}`;
            console.log($subway['stationNames']);
            // printStationListTitle($station);
            // addInputList($station, $stationNames, stationName);
        }
    })
}

function stationHtml() {
    const $title = document.querySelector('#app');

    $title.insertAdjacentHTML('beforeend', 
            `<div class="station" >
                <strong> 역 이름 </strong>
                <br/>
                <input type="text" id="station-name-input" 
                    placeholder="역 이름을 입력해주세요">
                <button id="station-add-button">역 추가</button>
                <br/>
                <h2> 지하철 역 목록 </h2>
            </div>`
        );
    setStationHidden();
}

export default function subwayMap() {
    let $subway = {};
    makeMenuBtn();
    menuBtnClick();
    stationHtml();
    getStationData($subway);
}

new subwayMap();