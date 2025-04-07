// fetch : Xmlhttprequest
// api를 호출할때 사용하는 함수

const { title } = require("process");
const { json, text } = require("stream/consumers");

// api 호출시 서버의 주소와 메소드 방식을 설정

// 주소 : 서버 프로그램 주소 (API)
// 게시물 데이터를 요청한 후에 응답받은 데이터를 조회
fetch('http://192.168.1.9:8080/board/read?no=1')
.then((response) => {
    return response.json(); // Return the parsed JSON
})
.then((json) => {
    console.log(json); // Log the JSON data
});


// fetxh 함수는 promise 객체를 내부에 포함하고 있음
// 그래서 fetch함수를 사용한 후에 바로 the과 catch를 쓸 수 있음

// XMLHTTPREQUEST + Promise 초합은 옜날 방식
// 요즘은 fetch를 사용

// api 종류
// 데이터 조회(get) 추가(post) 수정(put) 삭제(delete)

// post 데이터추가
// 데이터 추가에는 더 많은 인가자 필요

// 게시물 데이터 작성
const board = {
    title :'가입인사합니다.',
    content : '안녕하세요',
    writer : '유현재'
};

// 4번

/*

// 프로그램은 js객체를 이해할 수 없으니
// 공통포멕으로 데이터를 전송해야함
fetch('http://192.168.1.9:8080/board/register',{
    method:'POST',
    body : JSON.stringify(board), // 전송할 데이터
    headers : {
        'content-type' : 'application/json; chatset=UTP-8'
    }
}

).then((response) =>{
    // 응답데이터가 json이 아니고 간단한 텍스트일때
    return response.text();
})
.then((text) =>{
    console.log(text);
});
*/

/*
const modifyBoard = {
    no : 4,
    title : '가입인사합니다.',
    content : '수정완료',
    writer : '유현재'
}

fetch('http://192.168.1.9:8080/board/modify',{

    method:'PUT',
    body: JSON.stringify(modifyBoard),
    headers:{
        'content-type' : 'application/json; chatset=UTP-8'
    }

})
.then((response) => {
    console.log(response.status);
})
;
*/

// 게시물 삭제

fetch('http://192.168.1.9:8080/board/remove?no=4',{
    method:'DELETE',
})
.then((response) => {
    console.log(response.status);
});

//crud