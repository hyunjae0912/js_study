function calculateGrade(name, ...score){
    // score의 평균을 구한다.
    const sum = score.reduce((total, value) => {
        return total + value;
    }, 0);
    const avg = sum / 3;

    console.log(`${name}의 평균 점수는 ${avg.toFixed(2)}입니다.`);
}

calculateGrade('철수', 85, 90, 78);
calculateGrade('훈이', 80);