function onlyNum(obj){
    const value = obj.value;
    const regex = /^\d+$/;

    const result = regex.test(value)

    if (!result) {
        obj.style.border = "2px solid red";
    } else {
        obj.style.border = "";
    }
}

const textarea = document.querySelector('textarea');
const count = document.querySelector('span');

textarea.addEventListener("input", () => {
    var valuelength = textarea.value.length;
    count.textContent = valuelength;
    if(valuelength > 30){
        textarea.style.color = 'red';
    }
    else {
        textarea.style.color = '';
    }
});



const name = document.querySelector('#name');
const number = document.querySelector('#number');
const textareaValueLength = textarea.value.length;
function checkSubmit() {

    if (name.value.trim().length === 0) {
        alert('이름을 입력하세요');
        return;
    }

    if (number.value.trim().length === 0) {
        alert('번호를 입력하세요');
        return;
    }

    if (textareaValueLength === 0) {
        alert('지원동기를 입력하세요');
        return;
    }

    alert("접수가 완료되었습니다!");
}

function clearform(){
    name.value = '';
    number.value = '';
    textarea.value = '';
}