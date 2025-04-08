const str1 = "Hello, JavaScript is fun!";
// g를 붙여야지 하나만 안나오고 뒤에거까지 다 나옴
const regex1 = /[aeiou]/g;

const result1 = str1.match(regex1);

console.log(result1);
console.log();



const str2 = "Welcome to the world of coding!";

const regex2 = /coding/;  // 'coding'이라는 단어가 있는지 확인
const result2 = regex2.test(str2);

console.log(result2); // true

console.log();

const str3 = "JavaScript is powerful";

const regex3 = /is/;
const result3 = str3.search(regex3);
console.log(result3);

console.log();

// + => 하나 이상 연속
const str4 = "baanaaana";
const regex4 = /a+/g;

console.log(str4.match(regex4));


console.log();



const str5 = "abc123ABC";
const regex5 = /[a-z A-Z]/g;

const result5 = str5.match(regex5);

console.log(result5);

console.log();

const str6 = "Hello, World! How are you today?";
// 대문자를 모두 찾을려면 범위를 사용
// 전역플래그를 사용해서 어쩌구저쩌구
const regex6 = /[A-Z]/g;

const result6 = str6.match(regex6);
console.log(result6);