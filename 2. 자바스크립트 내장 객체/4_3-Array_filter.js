// filter: 조건을 만족하는 요소들만 모아 새 배열을 반환
// 인자: 조건을 정의하는 함수
// num: 배열의 각 요소

var arr = [1,2,3,4,5,6,7,8,9,10];

// false가 반환되면 제거 true가 반한되면 유지
arr.filter(function(value){
  return value > 5;
});

// 이건 람다식으로 바꾼듯
var filteredArr = arr.filter((num) => num > 5);

console.log("5보다 큰 숫자: ", filteredArr); // [6, 7, 8, 9, 10]

//점수가 80점 이상인 사람 찾기
var persons = [
  {
    name: "둘리",
    point: 100
  },
  {
    name: "또치",
    point: 60,
  },
  {
    name: "도우너",
    point: 80,
  },
  {
    name: "고길동",
    point: 65,
  },
];

console.log(persons.filter(function(value){
  return value.point >= 70;
}));

console.log(persons.filter((value) => value.point >= 70));
// [ { name: '둘리', point: 100 }, { name: '도우너', point: 80 } ]





// 간단한 이전과목 연습문제
const personlist = [
  { name : '유재석', age : 55},
  { name : '김종국', age : 48},
  { name : '양세찬', age : 35},
  { name : '하하', age : 50}
];


console.log(personlist.sort(function(a,b){
  return a.age - b.age;
}));
