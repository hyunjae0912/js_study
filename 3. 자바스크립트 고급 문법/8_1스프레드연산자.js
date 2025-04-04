const arr1 = [1,2,3];
const arr2 = [4,5,6];

// ... => 스프레드 연산자.
console.log(...arr1, ...arr2);
const arr = [1,2,3,4,5,6];

console.log(arr);

// 문자열 분해하기

const str = 'cd';

const arr3 = ['a','b','c','d','e','f','g'];

console.log(...arr3);

const obj1 = {name : '짱구', age : 10};
const obj2 = {address : '서울'};

// 쪼갠다음 다시 붙인다.
const newObj = {...obj1, ...obj2};
console.log(newObj); // { name: '짱구', age: 10, address: '서울' }

const arr4 = [...str];
console.log(arr4); // [ 'c', 'd' ]