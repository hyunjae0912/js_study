// 5번
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// 6번
const greet = () => "Hello, World!";
console.log(greet()); // "Hello, World!"

// 7번
const logSum = (a, b) => console.log(a + b);
logSum(5, 10); // 15

// 8번
const multiplyAndAdd = (a, b, c) => a*b +c;
console.log(multiplyAndAdd(2, 3, 4)); // 10

// 9번
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]



// 10번
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr.filter((number) => number % 2 == 0) ;
console.log(evenNumbers); // [2, 4, 6, 8, 10]