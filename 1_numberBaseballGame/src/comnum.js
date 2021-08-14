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

export default function GetComRandomNum() {
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
