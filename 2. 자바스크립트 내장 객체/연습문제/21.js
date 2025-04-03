let dice = Math.floor(Math.random() * 6) + 1;

const arr = [ ];
for(let i = 0; i < 3; i++){
    let dice = Math.floor(Math.random() * 6) + 1;
    arr[i] = dice;
}
console.log(arr);
console.log("주사위 값:", dice);

