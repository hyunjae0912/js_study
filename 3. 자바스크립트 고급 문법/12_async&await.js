// async/wait : 비동기 작업에 사용되는 키워드

const { json } = require("stream/consumers");

// 비동기는 then으로 처리해야함

// 함수 내부에 await키워드를 쓰면 함수 앞에 async를 부여해야함
async function func(){

    // 응답이 올때까지 기다리지 않고 결과를 사용
    // await: api 응답이 올때까지 기다리겠다는 의미
    // 전체 메시지
    const response = await fetch('http://192.168.1.9:8080/board/read?no=1');
    console.log(response);

    const json = await response.json();

    console.log(json); 
}

func();

// 이전예제를 보면 fetch를 호출한 후에 then 함수를 바로 이어서 사용해야함
// async-await 키워드를 사용하면 then없이 결과를 처리할 수 있음

const board = {
    title :'가입인사합니다.',
    content : '안녕하세요',
    writer : '유현재'
};


// api 를 호출하고 응답메시지 받기
// fetch는 응답이 올때까지 기다렸다가 결과를 받아야함
const response = fetch('http://192.168.1.9:8080/board/register', {
    method :'post',
    body: JSON.stringify(board),
    headers : {
    'content-type' : 'application/json; chatset=UTP-8'
    }
});

const newNo = await 

console.log(response)
