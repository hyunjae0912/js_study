// 원본 문자열
const  str = '2025-04-08';

// 정규표현식
const regex = /(\d{4})-(\d{2})-(\d{2})/;

const result = str.match(regex);
// 첫번째요소는 일치하는 모든 부분,
console.log(result);

console.log(result[1]);
console.log(result[2]);
console.log(result[3]);