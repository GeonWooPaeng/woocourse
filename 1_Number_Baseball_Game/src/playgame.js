import CheckBallStrike from "./ballstrike.js";
import GetComRandomNum from "./comnum.js";

export function GetPersonNums() {
  const $user_input = document.getElementById('user-input');

  return $user_input.value.split('');
}

function ResetPage() {
  const $user_input = document.getElementById('user-input');
  const $result = document.getElementById('result');

  $user_input.value = '';
  $result.innerHTML = '';
}

function CheckPersonNums(nums) {
  let numsSet = new Set(nums);

  if (numsSet.size === 3) {
    return true;
  }
  return false;
}

export function PlayGame(comNums, nums) {
  // 태그가 반복 되는 것이 아닙니다.
  const $submit = document.getElementById('submit');
  const $result = document.getElementById('result');

  $submit.addEventListener('click', () => {
    nums = GetPersonNums();

    if (!CheckPersonNums(nums)) {
      window.alert('문자를 잘못 입력했습니다.');
      $result.innerText = '';
    }
    else {
      CheckBallStrike($result, comNums, nums);
    }
    console.log(comNums);
  })
  $result.addEventListener('click', ({ target }) => {
    if (target.id === 'game-restart-button') {
      comNums = GetComRandomNum();
      ResetPage();
    }
  })
}