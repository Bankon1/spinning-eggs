const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const btnRandomSpin = document.querySelector(".random-spin-btn");
const items = document.querySelectorAll(".item");

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
  btnRandomSpin.disabled = true;
  //remove and replate the old plate to get rid of all potential hung up event listeners
  const oldPlate = document.querySelector(".plate");
  const plate = oldPlate.cloneNode(true);
  oldPlate.parentNode.replaceChild(plate, oldPlate);
  const time = "0.5s";
  const electrons = document.querySelectorAll(".electron");

  const additionalTurns = Math.floor(Math.random() * 10) + 1;

  let currentState = 0;

  const states = [
    () => {
      plate.style.animation = `plateThreeThirdLeftTurn ${time} linear forwards`;
      electrons.forEach(
        (electron) =>
          (electron.style.animation = `itemThreeThirdLeftTurn ${time} linear forwards`)
      );
      setTimeout(() => {
        const event = new CustomEvent("rotationdone");
        plate.dispatchEvent(event);
      }, 500);
    },
    () => {
      plate.style.animation = `plateOneThirdLeftTurn ${time} linear forwards`;
      electrons.forEach(
        (electron) =>
          (electron.style.animation = `itemOneThirdLeftTurn ${time} linear forwards`)
      );
      setTimeout(() => {
        const event = new CustomEvent("rotationdone");
        plate.dispatchEvent(event);
      }, 500);
    },
    () => {
      plate.style.animation = `plateTwoThirdLeftTurn ${time} linear forwards`;
      electrons.forEach(
        (electron) =>
          (electron.style.animation = `itemTwoThirdLeftTurn ${time} linear forwards`)
      );
      setTimeout(() => {
        const event = new CustomEvent("rotationdone");
        plate.dispatchEvent(event);
      }, 500);
    },
  ];

  const animateToNextState = () => {
    if (additionalTurns > currentState) {
      requestAnimationFrame(() => {
        states[++currentState % states.length]();
      });
    }
  };
  let counter = 0;
  plate.addEventListener("rotationdone", () => {
    animateToNextState();
    counter++;
    console.log("Additional Turns", additionalTurns, "Counter", counter);
    if (counter === additionalTurns) {
      setTimeout(() => {
        showWinningPopup();
      }, 500);
    }
  });
  animateToNextState();
}

function showWinningPopup() {
  const popup = document.querySelector(".winning-popup");
  popup.style.display = "flex";
}
btnLeft.addEventListener("click", rotateEggsToLeft);
btnRight.addEventListener("click", rotateEggsToRight);
btnRandomSpin.addEventListener("click", randomSpin);
items.forEach((item) =>
  item.addEventListener("click", () => {
    showWinningPopup();
  })
);
