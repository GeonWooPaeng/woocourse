import printStationList from "./station/printStationList.js";
import inputStationName from "./station/inputStation.js";
import printLineList from "./line/printLineList.js";
import inputLine from "./line/inputLine.js";
import makeSectionBtnToEdit from "./section/sectionTitle.js";








function printMapList($key, $mapID) {
  const $mapUls = document.querySelectorAll('.map > ul');
  
  $mapUls.forEach( ( $mapUl ) => {
    if ($mapUl.dataset.mapId == String($mapID)) {
      let $stations = JSON.parse(localStorage.getItem($key));
      $stations.forEach( ( $station ) => {
        $mapUl.insertAdjacentHTML('beforeend',
                                    `<li>${$station}</li>`);
      })
    }
  })
}

function printMapTitle() {
  const $map = document.querySelector('.map');
  const $keys = Object.keys(localStorage).sort();
  let $mapID = 0;

  $map.innerHTML = '';
  if ($keys !== null) {
    $keys.forEach( ($key) => {
      if ($key !== 'station') {
        $map.insertAdjacentHTML('beforeend',
                                  `<ul data-map-id="${ $mapID }"><h3><strong> ${$key} </strong></h3></ul>`);
        printMapList($key, $mapID);
        $mapID += 1;
        }
    })
  }
}

export default function init() {
    printStationList();
    inputStationName();
    printLineList();
    inputLine();
    makeSectionBtnToEdit();
    printMapTitle();
    // localStorage.clear();
  }
