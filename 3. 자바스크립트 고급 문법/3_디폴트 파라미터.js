// function multiply(a, b) {
//     if (b === undefined) {
//         console.log("b는 잘못된 값입니다.");
//         b = 1;
//     }
//     console.log(a * b);
// }

// 자주 사용함


// 함수의 매개변수에 기본값 설정
// 함수 호출시 전달받은 값이 있으면 그대로 사용하고
// 없으면 기본값을 사용함
function multiply(a, b = 1) {
    console.log(a * b);
}

// 값 하나만 넣으면 NaN이 나옴
multiply(5,5);

console.log("");


// 전달받은 텍스트를 출력하는 함수 정의
// 함수 호출시 전달받은 값이 있으면 그대로 사용하고
// 없으면 기본값을 사용함
function printText(text="값을 넣으셨습니까?") {
    console.log(text);
}

printText();
printText("안녕하세요!");