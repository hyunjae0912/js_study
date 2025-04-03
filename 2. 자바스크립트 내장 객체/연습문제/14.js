const student = new Map();

student.set("김민준", { grade: '2학년', major: '컴퓨터공학' });
student.set("이서윤", { grade: '3학년', major: '경영학' });
student.set("박지호", { grade: '1학년', major: '물리학' });
student.set("최지민", { grade: '4학년', major: '화학' });
student.set("정예린", { grade: '2학년', major: '수학' });
student.set("한지우", { grade: '3학년', major: '영어영문학' });

for (let [name, info] of student) {
    console.log(`${name}: ${info.grade}, ${info.major}`);
}

// 3학년 전공 변경
for (let [name, info] of student) {
    if (info.grade === "3학년") {
        student.set(name, { grade: "3학년", major: "융합공학" });
    }
}
console.log("3학년 색생들의 전공을 융합공학으로 변경했습니다.");

for (let [name, info] of student) {
    console.log(`${name}: ${info.grade}, ${info.major}`);
}

let one = 0;
let two = 0;
let three = 0;
let four = 0;

for (let [name, info] of student) {
    if (info.grade === "3학년") {
        three ++;
    }
    if (info.grade === "2학년") {
        two ++;
    }
    if (info.grade === "1학년") {
        one ++;
    }
    if (info.grade === "4학년") {
        four ++;
    }
}

console.log("학년별 학생 수");
console.log("1학년",one,'명');
console.log("2학년",two,'명');
console.log("3학년",three,'명');
console.log("4학년",four,'명');