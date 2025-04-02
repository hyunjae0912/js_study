const inventory = [
    { product: "감자칩", quantity: 10, price: 1500 },
    { product: "아이스크림", quantity: 0, price: 3000 },
    { product: "쿠키", quantity: 20, price: 2000 },
    { product: "탄산음료", quantity: 5, price: 1000 }
];

inventory.push({ product: "바나나킥", quantity: 50, price: 1000 });

const updatedInventory = inventory.map(item => {
    if (item.quantity > 0) {
        return { ...item, product: "(재고있음) " + item.product };
    }
    return item;
});

const updatedInventory222 = updatedInventory.map(item => {
    if (item.quantity > 10) {
        return { ...item, price: item.price * 0.9 };
    }
    return item;
});

let sum = 0;
for(let i =0;i<updatedInventory222.length;i++){
    sum = sum + updatedInventory222[i].quantity * updatedInventory222[i].price;
}

console.log(sum);

console.log(updatedInventory222);
