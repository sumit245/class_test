//8.  Write a program in javascript to print each element of an array at an interval that follows fibonacci series.
// function fibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib.slice(0, n);
// }
// console.log(fibonacci(6));

//6.Write a program in javascript to find smallest and largest number in an array. Then sort the array in order
//  [smallest, largest, other elements]

function number(arr) {
  if (arr.length === 0) {
    return [];
  }

  let smallest = arr[0];
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { smallest, largest };
}
const nums = [23, 6, 87, 0, 1, 65];
const result = number(nums);
console.log("largest:", result.largest);
console.log("smallest:", result.smallest);

// output: largest 87, smallest 0

//3.Write a program in javascript to accept only indian phone number.

 

//7 Write a program in array to take password as an argument and then encrypt it. Also write a program to decrypt it. Note: You must not use any 3rd party library

//4.Write a program in javascript to find the area of rhombus, square and triangle that can be fit inside a circle of radius R.
