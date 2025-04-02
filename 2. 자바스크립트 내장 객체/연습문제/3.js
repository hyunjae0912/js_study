const arr = [1, "aa", true, "5", 10];

let sum = 0;
for (let v of arr) {
    
    if (!isNaN(v)) {
        if (typeof v == "number" || typeof v == "boolean") {
            sum = sum + v;
        } else if (typeof v == "string") {
            sum = sum + parseInt(v);
        }
    }
}

console.log(sum);