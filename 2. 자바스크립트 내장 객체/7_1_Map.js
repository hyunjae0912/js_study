// Map: 자료구조, 데이터를 대량으로 저장할 때 사용
// 특징 : key_value 쌍 형태로 저장
// 식별자료 index 대신 key를 사용

// map 생성
const map = new Map();

map.set('name','둘리');
map.set('email','abc@gmail.com');
map.set('phone','010-1234-5678');

console.log(map);

// 데이터 수정
// set 안에 key값이 존재하면 데이터 수정
// 존재하지 않는다면 데이터 추가
map.set('phone','010-0000-0000');
console.log(map);

// 데이터 조회
const value = map.get('name');
console.log(value);

// map 크기 확인 (size)
const size = map.size;
console.log(size);      

// map 안에 특정 키값이 있는지 확인 (boolean값임)
const result = map.has('name');
console.log(result);

map.delete('name');
console.log(map);

// key값은 중복이 안되지만 value는 중복 가능
// map은 key 중복 불가, value는 중복가능

// map에 저장된 데이터 하나씩 꺼내기

console.log();
// for of문 사용 (구조 분해 문법)
for(const [key, value] of map){
    console.log(key, value);
}

console.log();
// 이름에 상관없이 자료에 맞는 값을 넣음
map.forEach((value, key) =>{
    console.log(value,key);
});

map.clear();
console.log(map);