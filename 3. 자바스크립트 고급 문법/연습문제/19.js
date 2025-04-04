let origin = {
    title: "자바 프로그래밍 입문",
    author: {
        firstname: "은종",
        lastname: "박",
    },
};

// 깊은 복사 수행
const copy = JSON.parse(JSON.stringify(origin)); 

// 복사한 객체의 lastname 변경
copy.author.lastname = '김';

console.log("원본 객체:", origin);
console.log("복사된 객체:", copy);


