const btnLeft = document.querySelector(".btn-left");

function rotateEggs() {
  const eggInSlot1 = document.querySelector(".slot1");
  const eggInSlot2 = document.querySelector(".slot2");
  const eggInSlot3 = document.querySelector(".slot3");

  if (eggInSlot1) {
    eggInSlot1.classList.add("moveOneToTwo");
    eggInSlot1.addEventListener("animationend", moveOneToTwo, { once: true });
  } else {
    console.log("no egg in slot1");
  }

  if (eggInSlot2) {
    eggInSlot2.classList.add("moveTwoToThree");
    eggInSlot2.addEventListener("animationend", moveTwoToThree, { once: true });
  } else {
    console.log("no egg in slot2");
  }

  if (eggInSlot3) {
    eggInSlot3.classList.add("moveThreeToOne");
    eggInSlot3.addEventListener("animationend", moveThreeToOne, { once: true });
  } else {
    console.log("no egg in slot3");
  }

  function moveOneToTwo() {
    console.log("animation done");
    eggInSlot2.classList.remove("slot1", "moveOneToTwo");
    eggInSlot2.classList.add("slot2");
  }
  function moveTwoToThree() {
    console.log("animation done");
    eggInSlot2.classList.remove("slot2", "moveTwoToThree");
    eggInSlot2.classList.add("slot3");
  }
  function moveThreeToOne() {
    console.log("animation done");
    eggInSlot2.classList.remove("slot3", "moveThreeToOne");
    eggInSlot2.classList.add("slot1");
  }
}

btnLeft.addEventListener("click", rotateEggs);
