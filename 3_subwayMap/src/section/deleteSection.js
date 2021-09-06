function deleteSectionToLocalStorage($lineName, $dataID) {
  const $sectionStations = JSON.parse(localStorage.getItem($lineName));

  $sectionStations.splice($dataID, 1);
  localStorage.setItem($lineName, JSON.stringify($sectionStations));
}

function deleteSectionToHtml($dataID) {
  const $sectionLists = document.querySelectorAll(".section-list > tbody > tr");

  $sectionLists.forEach(($sectionList) => {
    if ($sectionList.dataset.sectionId === $dataID) {
      $sectionList.remove();
    }
  });
}

function checkDeleteSection($lineName) {
  const $sectionStations = JSON.parse(localStorage.getItem($lineName));

  if ($sectionStations.length < 3) {
    alert("Line에 포함된 역이 2개 이하입니다.");
    return 0;
  }
  return 1;
}

export default function deleteSection($lineName) {
  const $sectionDeleteBtns = document.querySelectorAll(
    ".section-delete-button"
  );

  $sectionDeleteBtns.forEach(($sectionDeleteBtn) => {
    $sectionDeleteBtn.addEventListener("click", () => {
      if (window.confirm("정말 삭제하시겠습니까?")) {
        if (checkDeleteSection($lineName)) {
          const $sectionDataID = $sectionDeleteBtn.dataset.sectionId;
          deleteSectionToLocalStorage($lineName, $sectionDataID);
          deleteSectionToHtml($sectionDataID);
        }
      }
    });
  });
}
