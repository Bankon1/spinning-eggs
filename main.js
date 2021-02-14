// const btnLeft = document.querySelector(".btn-left");
// const btnRight = document.querySelector(".btn-right");

// function resetItem(item, from, to) {
//   console.log("animation done");
//   item.classList.remove(`slot-${from}`);
//   item.classList.add(`slot-${to}`);
//   item.style.animation = "";
// }

// function moveItem(item, curr, next) {
//   if (item) {
//     item.style.animation = `1s ease ${curr}2${next} forwards`;
//     item.addEventListener(
//       "animationend",
//       () => {
//         return resetItem(item, curr, next);
//       },
//       {
//         once: true,
//       }
//     );
//   }
// }

// function rotateEggsToLeft() {
//   const one = document.querySelector(".slot-one");
//   const two = document.querySelector(".slot-two");
//   const three = document.querySelector(".slot-three");

//   [one, two, three].forEach((item, index) => {
//     const number = {
//       curr: {
//         0: "one",
//         1: "two",
//         2: "three",
//       },
//       next: {
//         0: "three",
//         1: "one",
//         2: "two",
//       },
//     };

//     moveItem(item, number.curr[index], number.next[index]);
//   });
// }

// function rotateEggsToRight() {
//   const one = document.querySelector(".slot-one");
//   const two = document.querySelector(".slot-two");
//   const three = document.querySelector(".slot-three");

//   [one, two, three].forEach((item, index) => {
//     const number = {
//       curr: {
//         0: "one",
//         1: "two",
//         2: "three",
//       },
//       next: {
//         0: "two",
//         1: "three",
//         2: "one",
//       },
//     };

//     moveItem(item, number.curr[index], number.next[index]);
//   });
// }

// btnLeft.addEventListener("click", rotateEggsToLeft);
// btnRight.addEventListener("click", rotateEggsToRight);
