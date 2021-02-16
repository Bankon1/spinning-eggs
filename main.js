const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const btnRandomSpin = document.querySelector(".random-spin-btn");
const items = document.querySelectorAll(".item");

let position = 1;
const duration = "1.5s";
const easing = "ease";
const plate = document.querySelector(".plate");
const electrons = document.querySelectorAll(".electron");

function oneThirdLeftTurn(duration, easing, nextPosition) {
  return new Promise((resolve) => {
    plate.style.animation = `plateOneThirdLeftTurn ${duration} ${easing} forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemOneThirdLeftTurn ${duration} ${easing} forwards`)
    );
    plate.addEventListener("animationend", (e) => {
      const target = e.target;
      if (target.matches(".plate")) {
        resolve(nextPosition);
      }
    });
  });
}

function twoThirdLeftTurn(duration, easing, nextPosition) {
  return new Promise((resolve) => {
    plate.style.animation = `plateTwoThirdLeftTurn ${duration} ${easing} forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemTwoThirdLeftTurn ${duration} ${easing} forwards`)
    );
    plate.addEventListener("animationend", (e) => {
      const target = e.target;
      if (target.matches(".plate")) {
        resolve(nextPosition);
      }
    });
  });
}

function threeThirdLeftTurn(duration, easing, nextPosition) {
  return new Promise((resolve) => {
    plate.style.animation = `plateThreeThirdLeftTurn ${duration} ${easing} forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemThreeThirdLeftTurn ${duration} ${easing} forwards`)
    );
    plate.addEventListener("animationend", (e) => {
      const target = e.target;
      if (target.matches(".plate")) {
        resolve(nextPosition);
      }
    });
  });
}

function oneThirdRightTurn(duration, easing, nextPosition) {
  return new Promise((resolve) => {
    plate.style.animation = `plateOneThirdRightTurn ${duration} ${easing} forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemOneThirdRightTurn ${duration} ${easing} forwards`)
    );
    plate.addEventListener("animationend", (e) => {
      const target = e.target;
      if (target.matches(".plate")) {
        resolve(nextPosition);
      }
    });
  });
}

function twoThirdRightTurn(duration, easing, nextPosition) {
  return new Promise((resolve) => {
    plate.style.animation = `plateTwoThirdRightTurn ${duration} ${easing} forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemTwoThirdRightTurn ${duration} ${easing} forwards`)
    );
    plate.addEventListener("animationend", (e) => {
      const target = e.target;
      if (target.matches(".plate")) {
        resolve(nextPosition);
      }
    });
  });
}

function threeThirdRightTurn(duration, easing, nextPosition) {
  return new Promise((resolve) => {
    plate.style.animation = `plateThreeThirdRightTurn ${duration} ${easing} forwards`;
    electrons.forEach(
      (electron) =>
        (electron.style.animation = `itemThreeThirdRightTurn ${duration} ${easing} forwards`)
    );
    plate.addEventListener("animationend", (e) => {
      const target = e.target;
      if (target.matches(".plate")) {
        resolve(nextPosition);
      }
    });
  });
}

function showWinningPopup() {
  const popup = document.querySelector(".winning-popup");
  popup.style.display = "flex";
}

function rotateEggsToLeft() {
  if (position === 1) {
    const nextPosition = 2;
    oneThirdLeftTurn(duration, easing, nextPosition).then(
      (currPos) => (position = currPos)
    );
  }
  if (position === 2) {
    const nextPosition = 3;
    twoThirdLeftTurn(duration, easing, nextPosition).then(
      (currPos) => (position = currPos)
    );
  }
  if (position === 3) {
    const nextPosition = 1;
    threeThirdLeftTurn(duration, easing, nextPosition).then(
      (currPos) => (position = currPos)
    );
  }
}

function rotateEggsToRight() {
  if (position === 1) {
    const nextPosition = 3;
    oneThirdRightTurn(duration, easing, nextPosition).then(
      (currPos) => (position = currPos)
    );
  }
  if (position === 3) {
    const nextPosition = 2;
    twoThirdRightTurn(duration, easing, nextPosition).then(
      (currPos) => (position = currPos)
    );
  }
  if (position === 2) {
    const nextPosition = 1;
    threeThirdRightTurn(duration, easing, nextPosition).then(
      (currPos) => (position = currPos)
    );
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
    },
    () => {
      plate.style.animation = `plateOneThirdLeftTurn ${time} linear forwards`;
      electrons.forEach(
        (electron) =>
          (electron.style.animation = `itemOneThirdLeftTurn ${time} linear forwards`)
      );
    },
    () => {
      plate.style.animation = `plateTwoThirdLeftTurn ${time} linear forwards`;
      electrons.forEach(
        (electron) =>
          (electron.style.animation = `itemTwoThirdLeftTurn ${time} linear forwards`)
      );
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
  plate.addEventListener("animationend", (e) => {
    const target = e.target;
    if (target.matches(".plate")) {
      animateToNextState();
      counter++;
      console.log("Additional Turns", additionalTurns, "Counter", counter);
      if (counter === additionalTurns) {
        setTimeout(() => {
          showWinningPopup();
        }, 500);
      }
    }
  });
  animateToNextState();
}

btnLeft.addEventListener("click", rotateEggsToLeft);
btnRight.addEventListener("click", rotateEggsToRight);
btnRandomSpin.addEventListener("click", randomSpin);
items.forEach((item) =>
  item.addEventListener("click", () => {
    showWinningPopup();
  })
);
