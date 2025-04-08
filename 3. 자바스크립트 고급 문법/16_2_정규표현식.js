// 원본 문자열 생성
const str = 'hello world! World!';

// 정규 표현식 생성
const regex = /World/;
const regex2 = new RegExp('World');

const result1 = regex.exec(str);
const result2 = regex.test(str);
console.log(result1);
console.log(result2);


// 원본문자열에 World라는 텍스트가 포함되어있는지 확인
// test는 boolean, exec는 값 + 위치로 반환됨

// search는 인덱스 위치를 알려줌
// 문자열이 제공하는 search함수를 사용
// 인자는 정규표현식
const result3 = str.search(regex);
console.log(result3);