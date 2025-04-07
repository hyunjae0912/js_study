const person = {
    firstnmae : '길동',
    lastName : '고',
    age : 37,
    email : 'go@gmail.com'
}


// 객체 안에서 필요한 프로퍼티만 추출
// 객체 분해 : {추출할 프로퍼티} = 객체
// 존재하지 않는 key를 사용하면 undefined가 나옴

const {firstnmae, lastName} = person; // 객체 비구조화 할당

console.log(firstnmae, lastName); // 길동


// 해당 프로퍼티가 존재하는지 알 수 없을 때 사용
const {a = '기본값'} = person;
console.log(a); 

// 함수 정의
function func (age, email){
    console.log(age, email);
}

// 위에서 정의한 객체에서 나이와 메일을 사용
func(person.age, person.email);

func(person);