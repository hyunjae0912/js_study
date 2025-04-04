// 객체를 만들 때, 변수 사용하기

const key1 = 'maker';
const key2 = 'model';
const key3 = 'year';

// 자동차 객체 만들기
const car = {
    [key1]: '현대',
    [key2]: '소나타',
    [key3]: 2021,
};

console.log(car);

// object의 키가 정해지지 않았을 때 변수를 활용