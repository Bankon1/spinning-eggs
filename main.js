const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

let position = 1;
function rotateEggsToLeft() {
  const plate = document.querySelector(".plate");
  const electrons = document.querySelectorAll(".electron");
  if (position === 1) {
    plate.style.animation = "plateOneThirdTurn 1.5s ease forwards";
    electrons.forEach(
      (electron) =>
        (electron.style.animation = "itemOneThirdTurn 1.5s ease forwards")
    );
    plate.addEventListener("animationend", () => {
      position = 2;
    });
  }
  if (position === 2) {
    plate.style.animation = " plateTwoThirdTurn 1.5s ease forwards";
    electrons.forEach(
      (electron) =>
        (electron.style.animation = "itemTwoThirdTurn 1.5s ease forwards")
    );
    plate.addEventListener("animationend", () => {
      position = 3;
    });
  }
  if (position === 3) {
    plate.style.animation = " plateThreeThirdTurn 1.5s ease forwards";
    electrons.forEach(
      (electron) =>
        (electron.style.animation = "itemThreeThirdTurn 1.5s ease forwards")
    );
    plate.addEventListener("animationend", () => {
      position = 1;
    });
  }
}

function rotateEggsToRight() {
  console.log("rotating to the right");
}

btnLeft.addEventListener("click", rotateEggsToLeft);
btnRight.addEventListener("click", rotateEggsToRight);
