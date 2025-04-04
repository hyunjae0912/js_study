// 변수를 활용하여 객체 만들기

const key1 = 'subject';
const key2 = 'point';

// 객체의 키로 변수 사용하기
// key에 변수를 사용할때는 []대괄호를 사용
const score = {
    [key1]: '둘리',
    [key2] : 100
}

// object의 key가 정해지지 않았을 때 변수를 활용
const name = '둘리';
const age = 20;


const person = {
    pname : name,
    page: age
}

/*
console.log(person); // { pname: '둘리', page: 20 }
console.log(score); // { subject: '둘리', point: 100 }
// 객체의 값이 가변적으로 변할 때 사용
*/

const obj = {
    name: '둘리',
};

const key = 'address';

obj[key] = '서울시 강남구';
console.log(obj);
