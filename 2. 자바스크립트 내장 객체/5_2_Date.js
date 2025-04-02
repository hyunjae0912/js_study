const now = new Date();

// 2025-4-2

const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();

console.log(year,'-',month,"-",date);

//15:44:00

const hour = now.getHours();
const min = now.getMinutes();
const second = now.getSeconds();
const time = hour+":"+min+":"+second;
console.log(time);

const curDate = now.getDate();
now.setDate(curDate + 10);

console.log(now.toDateString());