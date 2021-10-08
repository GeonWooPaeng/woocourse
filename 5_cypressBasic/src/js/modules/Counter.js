export default function Counter({ $app }) {
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const countUp = () => {
    const $countDisplay = document.querySelector(".count-display");
    const $plusBtn = document.querySelector(".plus-button");
    $plusBtn.addEventListener("click", () => {
      let countValue = Number($countDisplay.value);
      if (countValue < 12) {
        $countDisplay.value = String(countValue + 1);
      }
    });
  };

  const countDown = () => {
    const $countDisplay = document.querySelector(".count-display");
    const $minusBtn = document.querySelector(".minus-button");
    $minusBtn.addEventListener("click", () => {
      let countValue = Number($countDisplay.value);
      if (countValue > 8) {
        $countDisplay.value = String(countValue - 1);
      }
    });
  };

  const init = () => {
    render();
    countUp();
    countDown();
  };

  init();
}
