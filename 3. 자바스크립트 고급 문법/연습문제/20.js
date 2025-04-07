const arr = {
    brand : 'apple',
    price : '990000',
    model : 'iphone 13',
}

const {brand = '애플', price } = arr;

console.log(`브랜드 ${brand}`);
console.log(`가격 ${price}`);