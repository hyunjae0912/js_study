// math객체 : 산술, 삼각함수 등 다양한 수학 기능 제공

// 반올림
console.log(Math.round(10.4));
console.log(Math.round(10.5));

console.log();

// 무조건 올림 (일단 소수가 있으면 올리고 봄. 약간 애매한 값에 사용하면 될듯)
console.log(Math.ceil(10.4));
console.log(Math.ceil(10.5));

console.log();

// 무조건 내림 (일단 소수가 있으면 내리고 봄. 약간 애매한 값에 사용하면 될듯)
console.log(Math.trunc(10.4));
console.log(Math.trunc(10.5));

console.log();

// 부호 확인 (음수는 -1, 0이면 0 양수면 1 반환)
console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(5));

console.log();

// 제곱 (값, 제곱할 값)
console.log(Math.pow(8,2));

console.log();

// 제곱근
console.log(Math.sqrt(64));

console.log();

// 절댓값
console.log(Math.abs(-4.5));
console.log(Math.abs(4.5));

console.log();

// 숫자 목록 중에서 가장 작은, 큰 값 찾기
console.log(Math.min(4,8,1,2,3,9));
console.log(Math.max(4,9,1,2,3,8));

console.log()

// 렌덤함수 : 그대로 사용하는 경우는 없고 결과값을 활용해서 특정 범위의 값을 구해야함
console.log(Math.random());
// 0부터 1까지 포함은 안됨
let num =  Math.random();
console.log(num);
console.log(num*10);
console.log(Math.floor(num*10) + 1);