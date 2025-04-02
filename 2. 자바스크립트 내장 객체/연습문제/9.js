const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDay();
const hours = now.getHours();
const min = now.getMinutes();
const second = now.getSeconds();

console.log("현재시간 : ", year,"년", month,"월", day,"일",hours,"시",min,"분",second,"초");