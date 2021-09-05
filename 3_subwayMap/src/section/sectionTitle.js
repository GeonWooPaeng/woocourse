function makeSectionTitle($sectionManagement) {
  $sectionManagement.innerHTML = '';
  $sectionManagement.insertAdjacentHTML('beforeend',
                                            `<h3>구간을 수정할 노선을 선택해주세요</h3>`)
}

export default function makeSectionBtnToEdit() {
  const $sectionManagement = document.querySelector('.section-management');
  let $keys = Object.keys(localStorage).sort();
  
  makeSectionTitle($sectionManagement);
  $keys.forEach(( $key ) => {
    if ($key !== 'station') {
      $sectionManagement.insertAdjacentHTML('beforeend',
                                              `<button class="section-line-menu-button">${$key}</button>`)
    }
  })
}
