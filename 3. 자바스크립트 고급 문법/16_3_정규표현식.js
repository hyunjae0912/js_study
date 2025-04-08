// 정규표현식 생성
const regex = /a/;

// 문자열이 제공하는 match함수를 사용하여 a가 포함되어 있는지 확인하기
const result = 'abcde'.match(regex);
console.log(result);

console.log(regex.exec('abcde'));

// 정규표현식에 특수문자 사용하기
// 1. 대소문자 구분 안함
const regex2 = /a/i;
const result2 = 'abcde'.match(regex2);
const result3 = 'ABCDE'.match(regex2);

console.log(result2);
console.log(result3);

// i는 대소문자 구분안함, g는 중복가능


const regex3 = /a/g;
const result4 = 'abcdea'.match(regex3);

console.log(result4);

const regex4 = /a/ig;
const result5 = "Abcdea".match(regex);

console.log(result5);