
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

function ComRandomNum() {
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
      comNums.push(num);
    i += 1;
  }
  console.log(comNums);
}

function BtnClick() {
  const Btn = document.getElementById('submit');
  Btn.addEventListener('click', function() {
    //document.getElementById().value => string
    console.log(typeof(document.getElementById('user-input').value));
  })
}


export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return "결과 값 String";
  };
  BtnClick();
  // play(ComRandomNum(), );
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();
