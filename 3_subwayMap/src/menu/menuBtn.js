function setHtmlHiddenAll() {
    const $containers = document.querySelectorAll(".subway-container > div");
    $containers.forEach(( $container ) => {
      $container.setAttribute('hidden', true);
    })
  }

export default function menuBtnClick() {
    const $menuBtn = document.querySelector('.menu-button');

    $menuBtn.addEventListener('click', ({ target }) => {
        setHtmlHiddenAll();
        if (target.id === 'station-manager-button') {
            //station part
            document.querySelector('.station-container').removeAttribute('hidden');
        }
        else if (target.id === 'line-manager-button') {
            //line part
            document.querySelector('.line-container').removeAttribute('hidden');
        }
        else if (target.id === 'section-manager-button') {
            //section part
            document.querySelector('.section-container').removeAttribute('hidden');
        }
        else if (target.id === 'map-print-manager-button') {
            //map print part
            document.querySelector('.map-print-container').removeAttribute('hidden');
        }
    })
}

  