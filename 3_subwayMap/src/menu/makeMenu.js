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
        else if (target.id === 'line-manager-button') {
            //line part
            setStationHidden();
        }
        // else if (target.id === 'section-manager-button') {
        //     //section part
        // }
        // else if (target.id === 'map-print-manager-button') {
        //     //map print part
        // }
    })
}

function makeMenu() {
    makeMenuBtn();
    menuBtnClick();
  }
  