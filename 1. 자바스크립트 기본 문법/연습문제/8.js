const { person } = require("./person");

const calc1 = function (x, y) {
    return x - y;
}
console.log(calc1(5, 3))

const calc2 = function (x, y) {
    let sum = 0;
    while (x <= y) {
        sum += x;
        x++;
    }
    return sum;
}

console.log(calc2(3, 5));

var arr = [1,2,4,9,8,7,6,3,5];

const calc3 = function (arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(calc3(arr));

var arr2 = ["A", 55, "C"];

const cacl4 = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== "string") {
            return false;
        }
    }
    return true;
}

console.log(cacl4(arr));

var arr3 = ["apple", "banana", "mango"];

let input = "banana";
const calc5 = function (arr3) {
    for (let i = 1; i < arr.length; i++) {
        if (arr3[i] == input) {
            return true;
        }
    }
    return false;
}

console.log(calc5(arr3));

let input_num = 2;
const calc6 = function (num) {
    for (let i = 2; i < 10; i++) {
        console.log(input_num + "*" + i + "=" + input_num * i);
    }
}

calc6(input_num);

var arr5 = ["apple", "banana", "mango", 1, 2, 3, true, false, "coffee", "짱구"];

const calc7 = function (arr5) {
    for (let i = 0; i < arr5.length; i++) {
        if (typeof arr5[i] == "string") {
            console.log(arr5[i]);
        }
        else {
            continue;
        }
    }
}

calc7(arr5);

var array;
const abc = function(arr5){
    for (let i = 0; i < arr5.length; i++) {
        if (type == "string"){
            array = arr5[i];
        }
    }
}




const calc8 = function (x) {
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }

    return result;
}

console.log(calc8(6));


// 오브젝트?

const students = [
    {name : "둘리" , math : 90, english : 85},
    {name : "또치" , math : 80, english : 95},
    {name : "도우너" , math : 70, english : 75}
]

const calc9 = function(students){
    let sum = 0;
    for(let i = 0 ; i < students.length; i++){
        sum += students[i].math;
    }
    return sum / students.length;
}

console.log(calc9(students));







const calc10 = function(person){
    let sum = 0;
    let count = 0;
    for(let i = 0 ; i < person.length; i++){
        if(person[i].position == "사원"){
            sum += person[i].salart;
            count ++ ;
        }
    }   
    return sum / count;
}

console.log(calc10(person));
