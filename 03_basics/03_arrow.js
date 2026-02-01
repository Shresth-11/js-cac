const user = {
    username: "shresth",
    price: 600,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    } // this is used to refer to the current context
}


// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) // output - {}   since we are in node environment






// function chai(){
//     let username = "shresth"
//     console.log(this.username); // in function it will not work like this, output is coming undefined
// }

// chai()







const chai = () => {
    let username = "shresth"
    console.log(this.username);
}


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3,4));



// Implicit return ---------------->>>

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "shresth"})   // returns object

console.log(addTwo(3,4));
 

// const myArray = [2,5,3,7,8]
// myArray.forEach(function () {})
// myArray.forEach( () => {})




// Arrow functions don't have their bindings to arguments, this, or super, and we cannot use them as methods. Arrow functions cannot be used as constructors.