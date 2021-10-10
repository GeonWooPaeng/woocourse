const getNum = () => {
  const $digitsBtn = document.querySelectorAll(".digits > button");
  const $total = document.querySelector("#total");

  $digitsBtn.forEach(($digit) => {
    $digit.addEventListener("click", () => {
      if ($total.innerHTML === "0") $total.innerHTML = $digit.innerHTML;
      else if ($total.innerHTML.length < 3)
        $total.innerHTML += $digit.innerHTML;
    });
  });
};

export default function Calculator() {
  getNum();
}

new Calculator();
