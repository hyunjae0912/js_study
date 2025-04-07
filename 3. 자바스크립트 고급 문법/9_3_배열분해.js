const arr = [1,2,3];

// 각 배열의 요소를 변수에 담기
const [a, b, c] = arr;


// 각 배열의 요소를 변수에 달기
// 첫 번째 요소는 a, 두 번째 요소는 b, 세 번째 요소는 c에 담긴다.
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

const arr2 = [4, 5, 6, 7, 8];
const [d, e, ...f] = arr2; // 나머지 연산자(...)
console.log(d);
console.log(e);
console.log(f);

// 입력한 대까지만 출력됨
const [q,w,r] = arr2;

console.log(q,w,r);

function func([ch1,ch2, , ch4]){
    console.log(ch1,ch2, ch4);
}

func(arr2);


func(['h','e','l','l','o']);