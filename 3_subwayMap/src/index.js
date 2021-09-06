// $ 사용이유: 함수랑 변수를 구별하기 위함입니다.
// jquery를 의미한다고 하지만 이러한 이유로 사용한 것이 아닙니다.

// btn 누 를 때마다 station innerHTML = '';로 지우고 리스트 다시 출력하는 식으로 합니다.

import menuBtnClick from "./menu/menuBtn.js";

export default function SubwayMap() {
  menuBtnClick();
}

new SubwayMap();
