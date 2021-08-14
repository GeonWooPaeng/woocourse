import { GetPersonNums, PlayGame } from "./playgame.js";
import GetComRandomNum from "./comnum.js";

export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return PlayGame(computerInputNumbers, userInputNumbers);
  };
  this.play(GetComRandomNum(), GetPersonNums());
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();


