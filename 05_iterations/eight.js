const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal
// }, 0)




const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);






const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 5999
    },
    {
        itemName: "java course",
        price: 5999
    },
]


const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total);
