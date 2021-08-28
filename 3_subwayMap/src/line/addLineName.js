export default function addLineName($lineName, $lineStartStationValue, $lineEndStationValue) {
  let $lineNames = JSON.parse(localStorage.getItem($lineName));

  if ($lineNames === null) {
    $lineNames = [];
  }
  $lineNames.push($lineStartStationValue);
  $lineNames.push($lineEndStationValue);
  localStorage.setItem($lineName, JSON.stringify($lineNames));
}
