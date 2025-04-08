// 정규표현식을 사용해서 우편번호 검사하기
// d => 숫자를 의미
// {5} => 앞의 패턴이 5번 반복되는지
// 연속적인 숫자가 5개 있는지?

// ^ 숫자로 시작되는가?
const regex = /^\d{5}$/;
const str = '238852';
console.log(regex.test(str));


// 정규표현식을 사용해서 전화번호 검사하기

// {4}앞에 있는 패턴이 4번 반복 -> 숫자가 4개 있는가?
// ^앞에있는걸로 시작이 되는가?
// 이거 너무 어려워
// $숫자 4개로 끝나는가?
const regex2 = /^010-\d{4}-\d{4}$/;
const str2 = '010-1234-6728';

console.log(regex2.test(str2));


// 문자 범위
// 대문자는 미포함
// 문자 뒤에 골뱅이가 존재하냐
// {2} => 문자가 연속적으로 2개
// 문자를 표현하는 방법 => [a-z A-Z] 또는 \w
const regex3 = /[a-z A-Z]@(@\w+) + (.\w{2,3})/;
const str3 = 'TEST@gmail.com';
console.log(regex3.test(str3));