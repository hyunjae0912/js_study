// 서버 프로그램 : json sercer
// 클라이언트 프로그램 : js 파일

// 자바스크립트를 사용해서 api를 호출

// 주소
// fetch 함수를 사용해서 api 호출

// response : 응답 메시지
// 게시물 목록 조회
// const response = await fetch('http://localhost:3000/boards');

// // 바디에 있는 데이터 꺼내고 객체로 반환
// // json()도 비동기
// const body = await response.json();
// console.log(body);


// 게시물 단건 조회
// const response = await fetch('http://localhost:3000/boards/1');
// const json = await response.json();

// console.log(json);


// const newBoard = {
//     id : 2,
//     title : '2번글',
//     writer: '또치'
// }

// const responses = await fetch('http://localhost:3000/boards',{
//     method : 'post',
//     body: JSON.stringify(newBoard),
//     headers: { 'content-type' : 'application/json; charset=UTP-8' }
// });

// // text -> 문자열 그대로 추출
// // json() -> 객채로 변환해서 추출
// const result = await response.text();

// console.log(result);



// const board = {
//     id : 2,
//     title : '게시물 수정 완료',
//     writer: '또치'
// }

// // api 주소, 객체
// // 게시물 수정
// const response = await fetch('http://localhost:3000/boards/2',{
//     method: 'PUT',
//     body : JSON.stringify(board),
//     headers: { 'content-type' : 'application/json; charset=UTP-8' }
// });

// const result = await response.text();

// console.log(result);


// const response = await fetch('http://localhost:3000/boards/1',{
//     method: "DELETE"
// });

// const result = await response.text();

// console.log(result);




const response = await fetch('http://localhost:3000/comments');

const result = await response.json();

console.log(result);

console.table(result)