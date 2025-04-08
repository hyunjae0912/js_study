// 플래그와 특수기호를 사용하여 정규표현식 만들기
const str = 'Is this all There is';
// [hat] => h,a,t중  하나를 찾음
const regex = /[hat]/gi;

console.log(str.match(regex));


const str2 = '123abc45kkk'; 

const regex2 = /[0-9]/g;
console.log(str2.match(regex2));

const regex3 = /\d/g;
console.log(str2.match(regex3));


const str3 = 'Hellooo';

// +: 문자 o가 하나이상 연속되는 부분 찾기
const regex4 = /o+/;

console.log(regex4);

// * 은 0개 이상
const regex5 = /lo*/g;
console.log(str3.match(regex5));

const str4 = '1 100 1000';
const regex6 = /10?/g;
console.log(str4.match(regex6));