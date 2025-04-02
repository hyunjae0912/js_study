const now = new Date();

const year = futureTime.getFullYear();
const month = futureTime.getMonth();
const day = futureTime.getDate();
const hours = futureTime.getHours();
const min = futureTime.getMinutes();
const seconds = futureTime.getSeconds();

console.log(`1시간 30분 후의 시간: ${year}.${month}.${day} ${hours}:${min}:${seconds}`);
