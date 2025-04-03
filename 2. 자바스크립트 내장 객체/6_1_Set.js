// set : 자료구조, 대량의 데이터를 저장할 때 사용
// 특정 : 데이터 중복 불가, 순서 없음, 인덱스 없음

// set 생성
const set = new Set();

// 데이터 추가 (인덱스는 없음)
set.add(1);
set.add(2);
set.add(3);


console.log(set);

// length를 검색해보고 없으면 size를 사용하면 됨
console.log(set.size);

// 데이터 삭제 (인덱스가 아닌 값(value)을 지움)
set.delete(2);
console.log(set);

// set 안에 특정 값이 있는지 확인
const result = set.has(1);
// 있으면 boolean값은 반환
console.log(result);

const result2 = set.has(2);
// 있으면 boolean값은 반환
console.log(result2);


// set은 인덱스가 없지만 모두 꺼낼려면 for문 사용

for(let value of set){
    console.log(value);
}

// 위아래 둘다 같은 뜻임

// foreach : set 안에 요소를 하나씩 꺼내면서 반복적인 작업
set.forEach((value) => console.log(value));

// set안에 있는 모든 값 삭제
set.clear();
console.log(set);