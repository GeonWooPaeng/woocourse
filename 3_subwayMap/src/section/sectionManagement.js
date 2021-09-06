function makeSectionInputSelector() {
  const $sectionStationSelector = document.querySelector(
    "#section-station-selector"
  );
  const $stations = JSON.parse(localStorage.getItem("station"));

  $sectionStationSelector.innerHTML = "";
  $stations.forEach(($station) => {
    $sectionStationSelector.insertAdjacentHTML(
      "beforeend",
      `<option>${$station}</option>`
    );
  });
}

function makeSectionInputNumber($sectionInput) {
  $sectionInput.insertAdjacentHTML(
    "beforeend",
    `<input id="section-order-input" type="number" placeholder="순서" />
                                    <button class="section-add-button">등록</button>`
  );
}

export default function makeSectionManagementTitle($sectionInput, $lineName) {
  $sectionInput.innerHTML = "";
  $sectionInput.insertAdjacentHTML(
    "beforeend",
    `<h3>${$lineName} 관리</h3>
                                    <h4>구간 등록</h4>
                                    <select id="section-station-selector"></select>`
  );
  makeSectionInputSelector();
  makeSectionInputNumber($sectionInput);
}
