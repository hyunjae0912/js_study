// 배열의 요소 중에서 20보다 큰 숫자 찾기
// 그리고 각 요소에 2를 곱해서 새로운 배열 만들기

// 원본
const arr = [10,15,20,25,30];

const arrfilter1 = arr.filter((value) => value >= 20);

const result = arrfilter1.map((value) => value * 2);

console.log(result);
// arr.map((value) => value * 2)



// 상품 가격에 형식 표시하기
// 대충 숫자 뒤에 원 추가하기

// sort
// filter
// map
// reduce