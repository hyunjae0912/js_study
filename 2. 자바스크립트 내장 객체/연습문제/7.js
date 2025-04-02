const students = [
    { name: "김철수", score: 85, gradeLevel: "1학년" },
    { name: "이영희", score: 92, gradeLevel: "2학년" },
    { name: "박지훈", score: 76, gradeLevel: "3학년" },
    { name: "최유리", score: 88, gradeLevel: "1학년" },
    { name: "정민호", score: 54, gradeLevel: "1학년" },
    { name: "한서연", score: 63, gradeLevel: "2학년" },
    { name: "장동건", score: 71, gradeLevel: "3학년" },
    { name: "오지호", score: 80, gradeLevel: "4학년" }
];

const change = students.map(function(student) {
    if (student.score >= 90) {
        return { ...student, grade: "A" }; 
    } else if (student.score >= 80) {
        return { ...student, grade: "B" };
    } else {
        return { ...student, grade: "C" };
    }
});

change.filter((value) => value.grade == "B");

console.log(change.filter((value) => value.grade == "B"));
