import getCarNames from '../input/get-car-names.js';

export default function addEventListener() {
    const $carNamesSubmit = document.querySelector('#car-names-submit');
    $carNamesSubmit.addEventListener('click', getCarNames);
}