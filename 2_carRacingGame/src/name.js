import InputTryNum from "./try.js";

function CheckCarName(carName) {
    for (let name of carName) {
      if (name.length > 5) {
        return (1);
      }
    }
    return (0);
  }  

function Car(name) {
  this.name = name;
}
function makeNewCars(carName) {
  const carList = carName.map((car) => new Car(car));
  
  carList.forEach((car) => car.count = 0);

  return carList;
}

export default function InputCarName($tryContainer, $result) {
    const $nameContainer = document.querySelector(".car-game-container").childNodes[1];
    const $nameBtn = $nameContainer.childNodes[3];
    const $nameText = $nameContainer.childNodes[1];
  
    $nameBtn.addEventListener('click', () => {
      let carName = $nameText.value.split(',');
      if (CheckCarName(carName)) {
        alert('Please check the Car Name');
        $nameText.value = '';
      }
      else {
        $tryContainer.style.visibility = 'visible';
        let carList = makeNewCars(carName);
        InputTryNum($tryContainer, $result, carList);
      }
    });
  }
  