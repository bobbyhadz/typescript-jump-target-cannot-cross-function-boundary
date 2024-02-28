export {};

// // Jump target cannot cross function boundary in TypeScript

// EXAMPLE 1 - Break a forEach() loop in TypeScript

const arr: string[] = ['bobby', 'hadz', 'com'];

const BreakError = {};

try {
  arr.forEach((element) => {
    if (element === 'hadz') {
      throw BreakError;
    }
    console.log(element); // 👉️ bobby
  });
} catch (err) {
  if (err !== BreakError) throw err;
}

// ---------------------------------------------------

// // EXAMPLE 2 - Break out of a single iteration in `forEach()`

// const arr: string[] = ['bobby', 'hadz', 'com'];

// arr.forEach((element) => {
//   if (element === 'hadz') {
//     return;
//   }

//   console.log(element); // 👉️ bobby, com
// });

// ---------------------------------------------------

// // EXAMPLE 3 - Use a `for...of` loop if that suits your use case

// const arr: string[] = ['bobby', 'hadz', 'com'];

// for (const element of arr) {
//   if (element === 'hadz') {
//     break;
//   }

//   console.log(element); // 👉️ "bobby"
// }

// ---------------------------------------------------

// // EXAMPLE 4 - If you need to access the index, use a basic `for` loop

// const arr: string[] = ['bobby', 'hadz', 'com'];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 'hadz') {
//     break;
//   }

//   console.log(arr[i]); // 👉️ "bobby"
// }
