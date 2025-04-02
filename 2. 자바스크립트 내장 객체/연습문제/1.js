const str5 = "aaabbc";
let count= 0;

for(let i = 0; i < str5.length;i++){
    if(str5[i] == 'a'){
        count++;
    }
}

console.log(count);