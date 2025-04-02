const num1 = 123;
const str1 = num1.toString();
console.log(typeof num1);
console.log(typeof str1);

let num2 = 10.188;
// 소숫점자리 표시 n번 자리까지 지정 (반올림이 적용됨)
console.log(num2.toFixed(0)); 
console.log(num2.toFixed(2));

// 정수 자리까지 표현
console.log(num2.toPrecision());
console.log(num2.toPrecision(2));
console.log(num2.toPrecision(4));

const numstr = "-10";
// 형변환 객체 없이 사용 가능하다.
const num = parseInt(numstr);
console.log(typeof numstr);
console.log(typeof num);

const str2 = '12.33';
const num3 = parseInt(str2);

console.log(str2, typeof str2);

// 형이 변환되면서 앞에있는 소수들 사라짐(정수형으로 바뀌니 어쩔 수 없음)
console.log(num3, typeof num3);


const str3 = '10 year';
const num4 = parseInt(str3);

// nan가 나오면 계산이 잘못 되었으니 알아서 하셈 라는 뜻

console.log(str3, typeof str3);
console.log(num4, typeof num4);


const str4 = '12.33';
const num5 = parseFloat(str4);

console.log(str4, typeof str4);
console.log(num5, typeof num5);

// 검사가 가능하지 여부
const result1 = isNaN('qwer');
console.log(result1);

const str5 = "0123";
let sum = 0;

for(let  i = 0; i < str5.length; i++){
//    이걸로 하면 문자열을 더하는거니 당연히 안됨
//    sum += str5[i];
    sum += parseInt(str5[i]);
}

console.log(sum);

let num10 = parseInt(str1.charAt(a));

