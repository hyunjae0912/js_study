function checkId(obj) {
    const str = obj.value;
    const regex = /^[a-z0-9]{4,8}$/;

    const result = regex.test(str);

    if (!result) {
        alert("아이디는 4-8자 소문자 또는 숫자만 가능합니다.");
        obj.style.border = "2px solid red";
    } 
    else {
        obj.style.border = "2px solid green";
    }
}

function checkPass(obj){
    
}