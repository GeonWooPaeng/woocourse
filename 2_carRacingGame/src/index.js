// <div> 숨기기
// https://hianna.tistory.com/484
// http://jun.hansung.ac.kr/CWP/Javascript/JavaScript%20HTML%20DOM%20Navigation.html

import InputCarName from "./name.js";

function PlayGame() {
  const $tryContainer = document.querySelector(".car-game-container").childNodes[3];
  const $result = document.querySelector("#app").childNodes[7];
  
  PageInit($tryContainer, $result);
  InputCarName($tryContainer);
}

function PageInit($tryContainer, $result) {
  //영역 유지
  $tryContainer.style.visibility = 'hidden';
  $result.style.visibility = 'hidden';
}


export default function RacingCarGame() {
  PlayGame();
}
// export default class RacingCarGame {
// }

new RacingCarGame();
