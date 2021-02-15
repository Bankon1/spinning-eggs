const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const btnRandomSpin = document.querySelector(".random-spin-btn");

let position = 1;
const time = "1.5s";
function rotateEggsToLeft() {
  const plate = document.querySelector(".plate");
  const electrons = document.querySelectorAll(".electron");
  if (position === 1) {
    plate.style.animation = `plateOneThirdLeftTurn ${time} ease forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemOneThirdLeftTurn ${time} ease forwards`)
    );
    plate.addEventListener("animationend", () => {
      position = 2;
    });
  }
  if (position === 2) {
    plate.style.animation = `plateTwoThirdLeftTurn ${time} ease forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemTwoThirdLeftTurn ${time} ease forwards`)
    );
    plate.addEventListener("animationend", () => {
      position = 3;
    });
  }
  if (position === 3) {
    plate.style.animation = `plateThreeThirdLeftTurn ${time} ease forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemThreeThirdLeftTurn ${time} ease forwards`)
    );
    plate.addEventListener("animationend", () => {
      position = 1;
    });
  }
}

function rotateEggsToRight() {
  const plate = document.querySelector(".plate");
  const electrons = document.querySelectorAll(".electron");
  if (position === 1) {
    plate.style.animation = `plateOneThirdRightTurn ${time} ease forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemOneThirdRightTurn ${time} ease forwards`)
    );
    plate.addEventListener("animationend", () => {
      position = 3;
      console.log(position);
    });
  }
  if (position === 2) {
    plate.style.animation = `plateThreeThirdRightTurn ${time} ease forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemThreeThirdRightTurn ${time} ease forwards`)
    );
    plate.addEventListener("animationend", () => {
      position = 1;
      console.log(position);
    });
  }
  if (position === 3) {
    plate.style.animation = `plateTwoThirdRightTurn ${time} ease forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemTwoThirdRightTurn ${time} ease forwards`)
    );
    plate.addEventListener("animationend", () => {
      position = 2;
    });
  }
}

function randomSpin() {
  const time = "2s";
  const plate = document.querySelector(".plate");
  const electrons = document.querySelectorAll(".electron");
  plate.style.animation = `plateFullTurn ${time} linear forwards`;
  electrons.forEach(
    (electron) =>
      (electron.style.animation = `itemFullTurn ${time} linear forwards`)
  );
  plate.addEventListener(
    "animationend",
    () => {
      plate.style.animation = "";
      electrons.forEach((electron) => (electron.style.animation = ""));
    },
    {
      once: true,
    }
  );

  
}

btnLeft.addEventListener("click", rotateEggsToLeft);
btnRight.addEventListener("click", rotateEggsToRight);
btnRandomSpin.addEventListener("click", randomSpin);
