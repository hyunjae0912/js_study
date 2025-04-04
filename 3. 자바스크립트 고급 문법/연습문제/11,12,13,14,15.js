const key1 = 'name';
const key2 = 'age';

const person = {
    [key1]: '아리',
    [key2]: 17,
};

console.log(`${person.name}의 나이는 ${person.age}입니다`);


// 12번
const num1 = 'a';
const num2 = 'b';

const axb = {
    [num1]: 10,
    [num2]: 20,
};

console.log(`${axb.a}와 ${axb.b}를 곱한 결과는 ${axb.a * axb.b}입니다.`); // { a: 10, b: 20 }

// 13번
const sumnum1 = 'a';
const sumnum2 = 'b';

const atb = {
    [num1]: 10,
    [num2]: 20,
};

console.log(`${axb.a}와 ${axb.b}의 평균은 ${(axb.a + axb.b) /2}입니다.`);

// 14번
const cityname = '서울';
const citypop = '인구수';

const apocalypse = {
    [cityname]: '서울',
    [citypop]: 9736000,
};

console.log(`${apocalypse[cityname]}의 인구는 ${apocalypse[citypop]}명입니다.`);

// 15번
// 학생의 이름과 ㅜ점수를 변수에 저장하고
// 시험점수에따라 합격여부를 표기
const studentName = '소영';
const score = 75;

// 삼항연상자 ?
const result = score >= 60 ? '합격' : '불합격'; 


console.log(`${studentName}의 시험결과는 ${score}점으로 ${result}입니다.`); // 소영의 시험결과는 합격입니다.

