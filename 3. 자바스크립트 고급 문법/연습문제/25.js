const str = "I have 2 apples and 3 oranges.";

const regex = /\d/g;

const result = str.match(regex);

console.log(result); // ["2", "3"]
