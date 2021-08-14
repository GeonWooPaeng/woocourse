import checkValidInput from "./checkValidInput.js";

export default function getUserInput() {
    const $userInput = document.querySelector('#user-input');
    const userInputNumbers = $userInput.nodeValue.split('').map((x) => Number(x));

    if (checkValidInput(userInputNumbers)) {
        return Number(userInputNumbers.join(''));
    }
    return false;
}