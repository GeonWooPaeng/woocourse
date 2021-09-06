export default function errorStationName($stationNames, $stationName) {
  if ($stationNames === null) {
    return 0;
  }
  if ($stationNames.includes($stationName)) {
    alert("중복된 지하철 이름 입니다.");
    return 1;
  }
  if ($stationName.length < 2) {
    alert("지하철 이름이 2글자 미만입니다.");
    return 1;
  }
  return 0;
}
