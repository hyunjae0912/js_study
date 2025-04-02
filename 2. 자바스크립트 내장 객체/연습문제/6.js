const fruits = ["apple", "banana", "grape", "kiwi","watermelon"];

let change_word = fruits.filter((values) => values.length > 5);

for(let i = 0; i < change_word.length; i++) {
    console.log(change_word[i].toUpperCase());
}