// rest 파라미터를 활용하여 학생들의 시험점수를 계산하는 프로그램을 구현

// 매개변수 : 과목명, 학생 리스트(set? map?)
// 결고 : 특정 과목의 평균점수
function calcAvgScore(subject, ...students) {
    // 특정 점수가 있는 학생 찾기
    // filter 리턴값은 boolean

    const studentEng = students.filter((student) => student[subject] !== undefined);
    const sum = studentEng.reduce((total, value) =>{
        return total + value[subject];
    },0);
    console.log(`학생 수 : ${studentEng.length}`);
    console.log(`과목 : ${subject}`);
    console.log(`총점 : ${sum}`);
    console.log(`평균 : ${sum/studentEng.length.toFixed(1)}`);
}

const student1 = {
    name: '짱구',
    eng: 80,
    math: 50,
    kor: 70
};
const student2 = {
    name: '철수',
    eng: 13,
    math: 43,
    kor: 61
};
const student3 = {
    name: '훈이',
    eng: 85,
    math: 59,
    kor: 74
};
const student4 = {
    name: '맹구',
    eng: 40,
    math: 80
};
const student5 = {
    name: '유리',
    math: 52,
    kor: 72
};


calcAvgScore('math', student1, student2, student3, student4, student5);
