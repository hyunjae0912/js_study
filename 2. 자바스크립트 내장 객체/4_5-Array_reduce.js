//reduce: 배열의 요소를 순회하며 누적값을 계산
//첫번째 인자: 계산식을 정의한 함수
//두번째 인자: 초기값 (여기서는 0)
// 숫자를 리턴
var points = [40, 100, 1, 5, 25, 10];


// 배열의 개수만큼 순회함 그리고 더함
console.log (points.reduce((preValue, curValue) => {
  console.log(preValue, curValue);
  return preValue + curValue;
}));

// prevalue는 처음에 배열에 첫번째 요소로 초기화
// 그 다음부터는 누적값

var sum = points.reduce(function (total, currentValue) {
  //total: 누적값, currentValue: 현재 요소
  return total + currentValue;
}, 0);

//배열 요소의 합계를 계산하여 반환
console.log(sum);

// 계산 과정
// 초기 total = 0
// total = 0 + 40 -> 40, currentValue = 40
// total = 40 + 100 -> 140, currentValue = 100
// total = 140 + 1 -> 141, currentValue = 1
// total = 141 + 5 -> 146, currentValue = 5
// total = 146 + 25 -> 171, currentValue = 25
// total = 171 + 10 -> 181, currentValue = 10
// 최종 sum = 181
