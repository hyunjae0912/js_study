// set을 활용하여 기록관리프로그램 만들기 (예시)

// set 생성
const watchMovie = new Set();

// 데이터 추가
watchMovie.add('인셉션');
watchMovie.add('매트릭스');
watchMovie.add('인터스텔라');

// 보고싶은 영화 목록 (바로 추가)
const toWatchMovie = new Set(['파이트 클럽','더 을프 오브 월스트리트','노인을 위한 나라는 없다.']);

// 새로운 영화를 시청
// 기존 목록에 있는지 확인해보고 추가하기

const isWatched = watchMovie.has('파이트 클럽');

if(!isWatched){
    watchMovie.add('파이트 클럽');
}

console.log('시청한 영화 목록', watchMovie);
const moviename = '파이트 클럽';


// 해당 영화가 보고싶은 영화 목록에 있다면, 삭제

if(toWatchMovie.has(moviename)){
    toWatchMovie.delete(moviename);
}
console.log('보고싶은 영화 목록: ', toWatchMovie);
console.log('시청한 영화 목록', watchMovie);


for(const movie of watchMovie){
    console.log(movie);
}