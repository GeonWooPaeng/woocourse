export default function errorLineName($lineName) {
  const keys = Object.keys(localStorage);

  if (keys.includes($lineName) && keys !== "station") {
    alert("이미 있는 라인 입니다.");
    return 0;
  }
  return 1;
}
