// 단어를 여러개 입력 받아서 하나의 문장으로 만드는 함수
function func(a, ...word){
    const str1 = '${a}~~~';
    const str2 = word.join(' ');
    const str3 = str1 + str2;
    console.log(str3);
}

// hello this is javascript
func('hello','this','is','javascript');