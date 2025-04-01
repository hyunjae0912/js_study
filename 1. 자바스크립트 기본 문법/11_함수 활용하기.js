let price1 = 100000;
let vat1 = 0.1;
let tax1 = price1 * vat1;
// console.log(tax1);

let price2 = 240000;
let vat2 = 0.1;
let tax2 = price2 * vat2;
// console.log(tax2);

// 중복되는 부분을 함수로 만슬기

let texCalc = function(price){
  vat = 0.1
  return price * vat;
}

console.log(texCalc(100000));