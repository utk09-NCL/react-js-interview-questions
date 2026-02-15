/** Snippet 1 */
// console.log(x);
// var x = 5;
// console.log(x);

/** --- */

/** Snippet 1A: What JS sees/evaluates as */
// var x;
// console.log(x);
// x = 5;
// console.log(x);

/** --- */

/** Snippet 2 */
// // Version A
// greet();
// function greet() {
//   console.log("Hello!");
// }

// // Version B
// greet();
// var greet = function() {
//   console.log("Hello!");
// };

/** --- */

/** Snippet 3 */
// console.log(a);
// let a = 10;

// console.log(b);
// const b = 10;

/** --- */

/** Snippet 4 */
// var a = "global";

// function outer() {
//   var b = "outer";

//   function inner() {
//     var c = "inner";
//     console.log("1: ", a, b, c);
//   }

//   inner();
//   console.log("2.1:", b);
//   console.log("2.2:", a);
//   console.log("2.3:", c);
// }

// outer();
// console.log("3.1:", a);
// console.log("3.2:", b);
// console.log("3.3:", c);

/** --- */

/** Snippet 5 */
// let x = 10;

// function foo() {
//   let x = 20;
//   console.log(x);
// }

// foo();
// console.log(x);

/** --- */

/** Snippet 6 */
// function createCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

/** Snippet 6A: with debugger */
// function createCounter2() {
//   let count = 0;
//   console.log("createCounter2 called, count initialized to:", count);

//   return function incrementAndReturn2() {
//     debugger;
//     console.log("inner function called, count before increment:", count);
//     count++;
//     console.log("count after increment:", count);
//     return count;
//   };
// }

// console.log("Creating counter2...");
// const counter2 = createCounter2();
// console.log("createCounter2 finished executing");

// console.log("typeof counter2:", typeof counter2);
// console.log("print counter2:", counter2);

// console.log("Calling counter2() first time:");
// console.log("Result:", counter2());

// console.log("Calling counter2() second time:");
// console.log("Result:", counter2());

// console.log("Calling counter2() third time:");
// console.log("Result:", counter2());

/** Snippet 6B: closure with array */
// function createCounter3() {
//   const count = [0];
//   console.log("createCounter3 called, count initialized to:", count);

//   return function incrementAndReturn3() {
//     console.log("inner function called, count before increment:", count);
//     count.push(1);
//     console.log("count after increment:", count);
//     return count;
//   };
// }

// console.log("Creating counter3...");
// const counter3 = createCounter3();
// console.log("createCounter3 finished executing");

// console.log("typeof counter3:", typeof counter3);
// console.log("print counter3:", counter3);

// console.log("Calling counter3() first time:");
// console.log("Result:", counter3());

// console.log("Calling counter3() second time:");
// console.log("Result:", counter3());

// console.log("Calling counter3() third time:");
// console.log("Result:", counter3());

/** --- */

/** Snippet 7 */
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }

/** --- */

/** Snippet 8 */
// for (let i = 0; i < 3; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 100);
// }

/** --- */

/** Snippet 9 */
// for (var i = 0; i < 3; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(j);
//     }, 100);
//   })(i);
// }

/** --- */

/** Snippet 10 */
// function setup() {
//   let name = "Alice";
//   const greet = () => `Hi, ${name}`;
//
//   name = "Bob";
//   return greet;
// }
//
// console.log(setup()());

/** --- */

/** Snippet 11 */
// function createCounter() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }
//
// const counterA = createCounter();
// const counterB = createCounter();
//
// console.log(counterA());
// console.log(counterA());
// console.log(counterB());
// console.log(counterA());

/** --- */

/** Snippet 12 */
// (function() {
//   var secret = "hidden";
//   console.log("IIFE ran!");
// })();
//
// console.log(typeof secret);

/** --- */

/** Snippet 13 */
// var counter = (function() {
//   var count = 0;
//
//   return {
//     increment: function() { count++; },
//     decrement: function() { count--; },
//     getCount: function() { return count; }
//   };
// })();
//
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount());
// console.log(typeof count);

/** Snippet 14 */
// let x = "outer";
//
// function test() {
//   console.log(x);
//   let x = "inner";
// }
//
// test();

/** --- */

/** Snippet 15 */
// function test(a = b, b = 1) {
//   console.log(a, b);
// }
//
// test();

/** --- */

/** Snippet 16 */
// console.log(typeof undeclared);
// console.log(typeof myLet);
// let myLet = 10;

/** --- */

/** Snippet 17 */
// function sum() {
//   console.log(typeof arguments);
//   console.log(Array.isArray(arguments));
//   console.log(arguments.length);
//   console.log(arguments[0] + arguments[1]);
// }
//
// sum(3, 7);

/** --- */

/** Snippet 18 */
// function regular() {
//   console.log("regular:", arguments.length);
// }
//
// const arrow = () => {
//   console.log("arrow:", arguments.length);
// };
//
// function withRest(...args) {
//   console.log("rest:", args.length);
// }
//
// regular(1, 2, 3);
// arrow(1, 2, 3);
// withRest(1, 2, 3);

/** --- */

/** Snippet 19 */
// function test(a) {
//   arguments[0] = 99;
//   console.log(a);
// }
//
// function testStrict(a) {
//   "use strict";
//   arguments[0] = 99;
//   console.log(a);
// }
//
// test(1);
// testStrict(1);

/** --- */

/** Snippet 20 */
// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) {
//       break outer;
//     }
//     console.log(i, j);
//   }
// }

/** --- */

/** Snippet 21 */
// block: {
//   console.log("before");
//   break block;
//   console.log("after");
// }
// console.log("outside");

/** --- */

/** Snippet 22 */
// console.log(void 0);
// console.log(void "hello");
// console.log(void (2 + 3));

/** --- */

/** Snippet 23 */
// let x = (1, 2, 3);
// console.log(x);
//
// let y = (console.log("a"), console.log("b"), "done");
// console.log(y);

/** --- */

/** Snippet 24 */
// var a = 1;
// let b = 2;
// const c = 3;
//
// console.log(delete a);
// console.log(delete b);
// console.log(delete c);
// console.log(a);
//
// const obj = { x: 10 };
// console.log(delete obj.x);
// console.log(obj.x);

/** --- */

/** Snippet 25 */
// const arr = [1, 2, 3, 4, 5];
// delete arr[2];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[2]);

/** --- */

/** Snippet 26 */
// console.log(void delete typeof null);

