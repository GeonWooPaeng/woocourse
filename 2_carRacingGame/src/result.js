function GetMove(carList) {
    
    carList.map((car) => {
        let move = Math.floor(Math.random() * 9) + 1;
        if (move > 3)
            car.count += 1;
    });
}

function FindMaxMove(carList) {
    let max = 0;

    carList.map((car) => {
        if (car.count > max)
            max = car.count;
    });
    return max;
}

function PrintResultProcess($result, carList) {
    carList.map((car) => {
        $result.insertAdjacentHTML('beforeend', `${car.name}: ${'-'.repeat(car.count)}<br>`,
        );
    });
    $result.insertAdjacentHTML('beforeend', `<br>`);
}

function PrintResult($result, carList) {
    let maxCnt = FindMaxMove(carList);
    let carResult = [];

    carList.map((car) => {
        if (car.count === maxCnt)
            carResult.push(car.name);
    });
    carResult = carResult.join(' ');
    $result.insertAdjacentHTML('beforeend', `<div>최종우승자: ${carResult} </div>`);
}

export default function GetResult($result, carList, carTry) {
    let i = 0;

    while (i < carTry) {
        $result.style.visibility = 'visible';
        GetMove(carList);
        PrintResultProcess($result, carList);
        i += 1;
    }
    PrintResult($result, carList);
}
