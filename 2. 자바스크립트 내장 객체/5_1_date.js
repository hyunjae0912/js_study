const now = new Date();
console.log(now);

// 약간 사람이 보기 편하게 변환 
console.log(now.toLocaleString());


// 일(day) 변경
now.setDate(10);
console.log(now.toLocaleString());

// 시간(hour) 변경
now.setHours(18);
console.log(now.toLocaleString());

//시간을 밀리세컨드 단위로 출력
console.log(Date.now());

// 날짜에서 연도, 월, 일 꺼내기
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
console.log(year);
console.log(month);
console.log(day);

const days = now.getDay();
console.log(days);

const hour = now.getHours;
// 등등 시 분 초 ms로 할 수 있음 