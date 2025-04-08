// 정규표현식에 특수문자 사용하기

// 정규표현식 생성
// \w => 문자를 의미 (A~Z a~z 0~9)
// + => 문자 하나 이상
const regex = /(\w+)/;

// 원본 문자열
const str = 'A';
const result = regex.test(str);
console.log(result);

// \s : 공백
const regex2 = /(\w+)\s(\w+)/;

// 공백이 중간에 없으면 false가 나옴
// 막 처음, 마지막에 있으면 안됨
const str2 = 'ab cd';
console.log(regex2.test(str2));