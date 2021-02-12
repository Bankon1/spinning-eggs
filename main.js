const btnRight = document.querySelector(".btn-left");

function move(item, from, to) {
  console.log("animation done");
  item.classList.remove(`slot-${from}`);
  item.classList.add(`slot-${to}`);
  item.style.animation = "";
}

function rotateEggsToRight() {
  const eggInSlot1 = document.querySelector(".slot-one");
  const eggInSlot2 = document.querySelector(".slot-two");
  const eggInSlot3 = document.querySelector(".slot-three");

  if (eggInSlot1) {
    eggInSlot1.style.animation = `1s ease one2two forwards`;
    eggInSlot1.addEventListener(
      "animationend",
      () => {
        return move(eggInSlot1, "one", "two");
      },
      {
        once: true,
      }
    );
  } else {
    console.log("no egg in slot1");
  }

  if (eggInSlot2) {
    eggInSlot2.style.animation = `1s ease two2three forwards`;
    eggInSlot2.addEventListener(
      "animationend",
      () => {
        return move(eggInSlot2, "two", "three");
      },
      { once: true }
    );
  } else {
    console.log("no egg in slot2");
  }

  if (eggInSlot3) {
    eggInSlot3.style.animation = `1s ease three2one forwards`;
    eggInSlot3.addEventListener(
      "animationend",
      () => {
        return move(eggInSlot3, "three", "one");
      },
      { once: true }
    );
  } else {
    console.log("no egg in slot3");
  }
}

btnRight.addEventListener("click", rotateEggsToRight);
