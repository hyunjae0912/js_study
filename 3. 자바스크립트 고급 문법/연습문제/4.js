function calc(...products) {

    // 총금액 -> 누적액
    // 배열의 reduce함수를 사용
    let sum = products.reduce((total, products) => {
        // 상품의 가격의 누적
        // 단, 할인율이 있다면 할인율을 적용할 것.
        console.log(products.discount, products.price);
        if (products.discount == undefined) {
            price = products.price;
        }
        else{
            price = products.price * (1 - products.discount / 100);
        }

        return total + price;
    }, 0);

    console.log(`총 금액 : ${sum}`);

}

const snack1 = { name: '새우깡', price: 1500, discount: 10 };
const snack2 = { name: '홈런볼', price: 2000, discount: 5 };
const snack3 = { name: '포카칩', price: 2500 };
const snack4 = { name: '칙촉', price: 3000, discount: 15 };
const snack5 = { name: '오잉', price: 1800 };

calc(snack1, snack2, snack3, snack4, snack5);
