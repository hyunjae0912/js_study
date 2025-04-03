const myBook = new Set();
const friendBook = new Set();

myBook.add('해리포터');
myBook.add('반지의 제왕');
myBook.add('어린왕자');
myBook.add('데이만');
myBook.add('1984');
myBook.add('위대한 개츠비');

// 타입은 전부 string형이다
for(const book of myBook){
    console.log(book, book.length);
}


if(myBook.has('위대한 개츠비')){
    myBook.delete('위대한 개츠비');
    console.log('위대한 개츠비를(을) 책 목록에서 삭제했습니다.');
}

friendBook.add('어린왕자');
friendBook.add('1984');
friendBook.add('노인과 바다');
friendBook.add('그리스인 조르바');

for(const book of friendBook){
    console.log(book);
}

const commonBooks = new Set();
myBook.forEach(book => {
    if (friendBook.has(book)) {
        commonBooks.add(book);
    }
});


console.log('두 명의 사용자가 공통으로 읽은 책:', commonBooks); 