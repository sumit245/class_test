//8.  Write a program in javascript to print each element of an array at an interval that follows fibonacci series.
function Fibonacci(n) {
  let fibArr = [0, 1];
  for (let i = 2; i < n; i++) {
    fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
  }
  return fibArr.slice(0, n);
}
console.log(Fibonacci(20));
