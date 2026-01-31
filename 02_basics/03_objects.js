// singleton

// literals se bnega toh singleton ni bnega or agr contructor se bnega to humesha singleton bnega


// Object.create ----- yhi hai constructor method k through or iske andr bnta hai singleton 




 
// object literals --- object ko declare krne ka tareeka hai



const mySym = Symbol("key1")


const JsUser = {
    name: "Shresth",
    "full name": "Shresth Jaiswal",
    [mySym]: "mykey1",    // this is the way to declare symbol acctually
    age: 28,
    location: "Jaipur",
    email: "shresth@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // another way to access the object key
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)

// console.log( JsUser[mySym])         // ***********************


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);



/*

@Shresth-11 ➜ /workspaces/js-cac (main) $ node 02_basics/03_objects.js 

{
  name: 'Shresth',
  'full name': 'Shresth Jaiswal',
  age: 28,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'    // *****************Look Important ****************** //
}
*/





JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

