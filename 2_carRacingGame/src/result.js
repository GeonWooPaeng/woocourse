function GetMove() {
    let move = Math.floor(Math.random() * 9) + 1;
    let moveCheck = 0;

    if (move > 3) {
        moveCheck = 1;
    }
    return moveCheck 
}

function PrintResult($result, carName) {
    $result.style.visibility = 'visible';
    let carNum = carName.length;
    let i = 0;
    let moveCheck;

    while (i < carNum) {
        moveCheck = GetMove();
        //innerAdjacentHTML(position, )
        $result.insertAdjacentHTML('beforeend', `</br> ${carName[i]}: `);
        if (moveCheck) {
            $result.insertAdjacentHTML('beforeend', '-');
        }
        // else {
        //     $result.insertAdjacentHTML('beforeend', `</br> ${carName[i]}: `);
        // }
        i += 1;
    }
    $result.innerHTML += `</br>`;
}

export default function GetResult($result, carName, carTry) {
    let i = 0;

    while (i < carTry) {
        PrintResult($result, carName);
        i += 1;
    }
}