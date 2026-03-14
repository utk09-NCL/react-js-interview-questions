/** Session 1 (v2) */

//// 1. order of logs
// console.log("1");
// setTimeout(() => console.log("setTimeout runs - 1"), 0)
// console.log("4");
// console.log("7");
// setTimeout(() => console.log("setTimeout runs - 2"), 0)
// console.log("10");

//// 2. order of logs
// console.log("1");

// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));

// console.log("4");
// console.log("5");

// setTimeout(() => console.log("6"), 0);
// Promise.resolve().then(() => console.log("7"));

// console.log("8");

////3.
// Promise.resolve()
//   .then(() => {
//     console.log("A");
//     Promise.resolve().then(() => console.log("B"));
//   })
//   .then(() => console.log("C"));

// console.log("D");

////4.
// const p = new Promise((resolve) => {
//   console.log("A");
//   resolve("B");
//   console.log("C");
// });

// p.then((val) => console.log(val));
// console.log("D");

////5.
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => x + 1)
  .then(x => { x + 1 }) // this throws an error bcoz no explicit return
  .then(x => x + 1)
  .then(x => console.log(x));

////6.
