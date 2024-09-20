//6 Write a program in javascript to find smallest and largest number in an array. Then sort the array in order
//[smallest, largest, other elements]

function number(arr) {
  if (arr.length === 0) {
    return [];
  }

  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return { smallest, largest };
}
const nums = [4, 8, 7, 6, 75, 792, 47, 4];
const result = number(nums);

console.log("smallest:", result.smallest);
console.log("largest:", result.largest);
