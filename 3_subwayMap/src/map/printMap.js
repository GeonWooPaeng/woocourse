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

export default function printMapTitle() {
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