// 배열 정렬하기

const fruits = ['banana', 'orange','apple','mango'];
// sort는 원본 데이터를 변경한다.
fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

const arr = [40,100,1,5];
// 첫번째 매개변수
// 두번째 매개변수
arr.sort()
console.log(arr);

arr.sort(function(a,b){
    return a - b;
});
// a:40, b : 100
// a : 100, b : 1

console.log(arr.sort(function(a,b){
    return a - b;
}));







