
function ComRandomCheck(nums, num) {
  //computer random 숫자 check
  var n;

  if (nums.length == 0)
    return (0);
  for (n of nums) {
    if (n == num)
      return (1);
  }
  return (0);
}

function GetComRandomNum() {
  //computer random 숫자
  let comNums = [];
  let i = 0;
  let num;

  while (i < 3) {
    // Math.random() * (최댓값 - 최솟값) + 최솟값
    num = Math.floor(Math.random() * 9) + 1;
    if (ComRandomCheck(comNums, num))
      i -= 1;
    else
      comNums.push(String(num));
    i += 1;
  }
  return comNums;
}

function GetBallNum(comNums, nums) {
  return nums.reduce((acc, val, idx) => {
    if (val !== comNums[idx] && comNums.includes(val)) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function GetStrikeNum(comNums, nums) {
  return nums.reduce((acc, val, idx) => {
    if (val === comNums[idx]) {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function GetPersonNums() {
  const $user_input = document.getElementById('user-input');

  return $user_input.value.split('');
}

function PrintAllStrike($result) {
  $result.innerHTML = `<div>
                          <strong> 정답을 맞추셨습니다.! </strong>
                          <br>
                          게임을 새로 시작하시겠습니까? 
                          <button id=restart>게임 재시작</button>
                      </div>`
}

function ResetPage() {
  const $result = document.getElementById('result');

  $result.value = '';
}

function CheckValue($result, comNums, nums) {
  let strike = GetStrikeNum(comNums, nums);
  let ball = GetBallNum(comNums, nums);

  if (strike === 0 && ball === 0) {
    //innerText, textContent 차이점
    //https://webisfree.com/2020-03-07/[%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8]-textcontent-%EA%B7%B8%EB%A6%AC%EA%B3%A0-innertext-%EC%B0%A8%EC%9D%B4%EC%A0%90-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0
    $result.innerText = '낫싱';
  }
  else if (strike === 3) {
    PrintAllStrike($result);
    return ;
  }
  else {
    //ball, strike 나타내기
  }
}

function PlayGame(comNums) {
  // 태그가 반복 되는 것이 아닙니다.
  const $submit = document.getElementById('submit');
  const $result = document.getElementById('result');

  $submit.addEventListener('click', () => {
    let nums = GetPersonNums();
    let strike = GetStrikeNum(comNums, nums);
    let ball = GetBallNum(comNums, nums);

    console.log(comNums);
    CheckValue($result, comNums, nums);
    $result.addEventListener('click', ({ target }) => {
      if (target.id === 'restart') {

      }
    })
  })
}

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
  PlayGame(GetComRandomNum());
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();


