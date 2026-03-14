/** Session 2 v2 -- questions */

//// 1. Fix this / improve this:
async function fetchData() {
  const res = await fetch("https://some.random.url");
  const data = await res.json();
  return data;
}

fetchData()
  .then(data => console.log("data:", data));

// Answer:
// async function fetchData() {
//   try {
//     const res = await fetch("https://some.random.url");
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error occurred:", error);
//     throw error;
//   }
// }

// fetchData()
//   .then(data => console.log("data:", data))
//   .catch(err => console.error("err:", err));

//// 2. Implement "map" in JavaScript (without using .map)

// v1 solution
function map(arr, op) {
  let newArr = [];
  for (el of arr) {
    newArr.push(op(el));
  }
  return newArr;
}
const nums1 = [1, 2, 3];
console.log(map(nums1, (x) => (x) * 3));

// v2 colution, passing index
function myMap(arr, op) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(op(arr[i], i, arr));
  }
  return newArr;
}

const nums2 = [1, 2, 3];
console.log(myMap(nums2, (x, idx) => (x + idx) * 3));

//// 3. implement a debounce function

function debounceV1(callback, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const print = debounceV1(msg => console.log(msg), 300);
print("1");
print("2");
print("3");
print("4");
print("5");
print("6");
print("7");
print("8");
print("9");



function debounceV2(callback, delay, { leading = false, trailing = true } = {}) {
  let timer;

  return (...args) => {
    const shouldPrintNow = leading && !timer;

    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = undefined;

      if (trailing && !shouldPrintNow) {
        callback(...args);
      }
    }, delay);

    if (shouldPrintNow) {
      callback(...args);
    }
  };
}

const printV2 = debounceV2(msg => console.log(msg), 300, { leading: true, trailing: true });
printV2("1");
printV2("2");
printV2("3");
printV2("4");
printV2("5");
printV2("6");
printV2("7");
printV2("8");
printV2("9");