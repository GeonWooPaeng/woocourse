function findDeleteLineName($dataID) {
  const $lineNames = document.querySelectorAll(".line-list > tbody > tr > td");

  for (let i = 0; i < $lineNames.length; i++) {
    if ($lineNames[i].dataset.lineId === $dataID) {
      return $lineNames[i].innerText;
    }
  }
}

function deleteLineNameToLocalStorage($dataID) {
  const $lineDeleteName = findDeleteLineName($dataID);

  localStorage.removeItem($lineDeleteName);
  console.log(localStorage);
}

function deleteLineListHTML($dataID) {
  const $lineLists = document.querySelectorAll(".line-list > tbody > tr");

  $lineLists.forEach(($lineList) => {
    if ($lineList.dataset.lineId === $dataID) {
      $lineList.remove();
    }
  });
}

export default function deleteLine() {
  const $lineDeleteBtns = document.querySelectorAll(".line-delete-button");

  $lineDeleteBtns.forEach(($lineDeleteBtn) => {
    $lineDeleteBtn.addEventListener("click", () => {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        deleteLineNameToLocalStorage($lineDeleteBtn.dataset.lineId);
        deleteLineListHTML($lineDeleteBtn.dataset.lineId);
      }
    });
  });
}
