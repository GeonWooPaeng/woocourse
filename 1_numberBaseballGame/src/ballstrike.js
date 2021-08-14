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

function PrintAllStrike($result) {
  $result.innerHTML = `<div>
                          <strong> 정답을 맞추셨습니다.! </strong>
                          <br>
                          게임을 새로 시작하시겠습니까? 
                          <button id="game-restart-button">재시작</button>
                      </div>`
}

function PrintBallStrike($result, ball, strike) {
  if (ball && !strike) {
    //ball만 있는 경우
    $result.innerText = `${ball}볼`;
  }
  else if (!ball && strike) {
    $result.innerText = `${strike}스트라이크`;
  }
  else {
    $result.innerText = `${ball}볼 ${strike}스트라이크`;
  }
}

export default function CheckBallStrike($result, comNums, nums) {
  let ball = GetBallNum(comNums, nums);
  let strike = GetStrikeNum(comNums, nums);

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
    PrintBallStrike($result, ball, strike);
  }
}