const movie = {
    title : '인셉션',
    director : '크리스토퍼 놀란',
    year : 2010
}

// 객체 분해
// {추출할 프로퍼티} = 객체;
const {title : movieTitle, year : movieYear} = movie;

console.log(movieTitle, movieYear);

