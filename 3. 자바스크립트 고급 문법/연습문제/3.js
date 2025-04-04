// 취미는 reast를 사용해서 배열로 받기
function printPerson(name, age,...hobby) {
    console.log(`${name}의 나이는 ${age}살이고 취미는 ${hobby.join(', ')}입니다.`);
}

printPerson('철수', 5, '축구', '독서', '영화 감상');
printPerson('유리', 5, '소꿉놀이');
printPerson('훈이', 5, '게임', '영화 감상', '독서', '축구');
printPerson('영희', 5, '게임', '영화 감상', '독서', '축구', '소꿉놀이');
printPerson('영수', 5, '게임', '영화 감상', '독서', '축구', '소꿉놀이', '운동하기', '공부하기', '요리하기', '여행하기', '운동하기', '게임하기');

