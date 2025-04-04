let origin = {
    title: "위대한 개츠비",
    author: '스콧 피츠제럴드',
    publishedYear: 1925
};

// 깊?은 복사
const copyBook = {...origin};

console.log(origin);
console.log(copyBook);

copyBook.publishedYear = 2023;

console.log(origin);
console.log(copyBook);