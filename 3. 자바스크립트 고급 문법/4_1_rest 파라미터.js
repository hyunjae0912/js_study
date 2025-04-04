// rest 파라미터 : 함수의 나머지 파라미터

// 함수 정의
// 전달받은 파라미터를 모두 출력하는 함수
// 전달받은 인자의 개수와 상관없이 배열로 출력
// 나머지 파라미터는 반드시 마지막에 위치해야 한다.
function func(a, b, ...rest) {
    console.log(rest); // 배열로 출력됨
}

func(1, 2, 3);
func(1, 2, 3, 4, 5);

// ..rest파라미터를 활용하여 숫자들의 합계 구하기
// 파라미터의 이름은 마음대로 정해도 됨
function sum(...arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    console.log(total);
}

sum(1, 2, 3);
sum(10, 20, 30, 40, 50);