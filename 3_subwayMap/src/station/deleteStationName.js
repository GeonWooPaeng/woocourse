function deleteStationListHtml($dataID) {
  const $stationLists = document.querySelectorAll(".station-list > tbody > tr");

  $stationLists.forEach(($stationList) => {
    if ($stationList.dataset.stationId === $dataID) {
      $stationList.remove();
    }
  });
}

function findDeleteStationName($dataID) {
  const $stationLists = document.querySelectorAll(
    ".station-list > tbody > tr > td"
  );

  for (let i = 0; i < $stationLists.length; i++) {
    if ($stationLists[i].dataset.stationId === $dataID) {
      return $stationLists[i].innerText;
    }
  }
}

function deleteStationNameTolocalStorage($dataID) {
  const $stationNames = JSON.parse(localStorage.getItem("station"));
  const $stationDeleteName = findDeleteStationName($dataID);

  $stationNames.splice($stationNames.indexOf($stationDeleteName), 1);
  localStorage.setItem("station", JSON.stringify($stationNames));
}

function checkInTheLine($dataID) {
  const keys = Object.keys(localStorage);
  const $stationDeleteName = findDeleteStationName($dataID);
  let i;

  for (i = 0; i < keys.length; i++) {
    if (keys[i] !== "station" && keys[i] !== null) {
      const $stationNames = JSON.parse(localStorage.getItem(keys[i]));
      if ($stationNames.includes($stationDeleteName)) {
        window.alert("Line에 있는 역입니다.");
        return 1;
      }
    }
  }
  return 0;
}

export default function deleteStationName() {
  const $stationDeleteBtns = document.querySelectorAll(
    ".station-delete-button"
  );

  $stationDeleteBtns.forEach(($stationDeleteBtn) => {
    $stationDeleteBtn.addEventListener("click", () => {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        if (!checkInTheLine($stationDeleteBtn.dataset.stationId)) {
          deleteStationNameTolocalStorage($stationDeleteBtn.dataset.stationId);
          deleteStationListHtml($stationDeleteBtn.dataset.stationId);
        }
      }
    });
  });
}
