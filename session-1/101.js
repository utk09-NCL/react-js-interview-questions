// Session 1 - Exercise 1

//// 1. var vs let vs const
// function example() {
//   if (true) {
//     var a = 1;
//     let b = 2;
//     const c = 3;
//   }
//   console.log("a: ", a); // var is function scoped, so this prints
//   console.log("b: ", b); // let is block-scoped, so this fails with "ReferenceError: b is not defined"
//   console.log("c: ", c); // const is also block-scoped, but program never reaches here because it crashes on "b"
// }
// example();

//// 2. const doesn't mean immutable
// const user = { name: "MLH", age: 25 };
// user.age = 26;
// console.log(user.age); // works because we are not re-assigning the variable, we are just updating the value

// const nums = [1, 2, 3];
// nums.push(4);
// console.log(nums); // works because we are not re-assigning the variable, we are just updating the value

// user = {} // will throw error, because we are re-assigning the variable
// nums = [] // will throw error, because we are re-assigning the variable

// // 3. Redeclaration of variables
// var x = 1;
// var x = 2;
// console.log("x: ", x);

// let y = 1;
// console.log("y: ", y); // this will throw an error, because we are re-declaring same variable name in the same block. Error at parse time: "Uncaught SyntaxError: Identifier 'y' has already been declared"
// let y = 2;
// console.log("y: ", y);

// // But if we wrap it in a block, it won't throw any errors. Comment the above "let y" declarations and then run. Tip: curly brackets {} create blocks
// {
//   let y = 1;
//   console.log("y: ", y);
// }

// {
//   let y = 2;
//   console.log("y: ", y);
// }

// // 4. typeof value

// console.log(typeof 42); // ("number");
// console.log(typeof 42.45); // ("number");
// console.log(typeof "GHW"); // ("string");
// console.log(typeof true); // ("boolean");
// console.log(typeof undefined); // ("undefined");
// console.log(typeof function () {}); // ("function");
// console.log(typeof Symbol()); // ("symbol");

// // note: typeof always returns a string representation of type

// console.log(typeof null); // 'object'
// console.log(typeof NaN); // 'number'
// console.log(typeof [1, 2, 3]); // 'object'. To check array, do Array.isArray([1, 2, 3]) // will return true if an array
// console.log(typeof {a: 1, b: "GHW"}); // 'object'

// // 5. undefined vs not defined

// var a;
// console.log(a);
// console.log(b);
// // undefined
// // Uncaught ReferenceError: b is not defined

// let d;
// console.log(d);
// console.log(e);
// // undefined
// // Uncaught ReferenceError: e is not defined

// const x;
// console.log(x);
// console.log(y);
// // Uncaught SyntaxError: Missing initializer in const declarationUnderstand this error
// const z = undefined;
// console.log(z);
// console.log(ghw);
// // undefined
// // Uncaught ReferenceError: ghw is not defined

// if (typeof window !== "undefined") {
//   console.log("yayyyy, inside a window");
// } else {
//   console.log("sadddd, no window in node.js env");
// }

// if (typeof document !== "undefined") {
//   console.log("yayyyy, inside a document");
// } else {
//   console.log("sadddd, no document in node.js env");
// }

// if (typeof navigator !== "undefined") {
//   console.log(navigator.userAgent); // will return nodejs version, e.g. Node.js/22
//   console.log(navigator.platform); // will return platform type, e.g. MacIntel
//   console.log(navigator.languages); // will return array of languages, e.g. [ 'en-US' ]
// }

// // 6. '==' vs '==='
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false
// console.log(1 == "2"); // false

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(false + "hello"); // falsehello

// // see spec: https://tc39.es/ecma262/#sec-islooselyequal