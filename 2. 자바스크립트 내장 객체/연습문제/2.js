/*
//replace: 특정 문자열을 다른 문자열로 교체하는 함수
console.log(fruit.replace("바나나", "딸기")); //사과, 딸기, 키위

//구분자를 기준으로 문자열을 쪼개는 함수
let birthday = "1997-06-12";
console.log(birthday.split("-")); //['1997', '06', '12']

*/

let msg = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아.";

let msg_length = msg.split(" ");
console.log(msg_length);
const filter = function(msg_length){
    for(let i = 0; i < msg_length.length; i++){
        if(msg_length[i] == "나쁜" || msg_length[i] == "더러운"){
            msg_length[i] = "X".repeat(msg_length[i].length);
        }
    }
    return msg_length.join(" ");
}
let word = ["나쁜", "더러운"];

for(let i = 0; i < msg_length.length; i++){
    if(msg.includes(word)){ 
        msg = msg.replace(word,'X'.repeat(word.length));
    }
}


console.log(filter(msg_length));
