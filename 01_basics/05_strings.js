const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount);  // should not use , outdated it is

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);  // String interpolation



const gameName = new String ('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)   // in substring we cant write negative values it will treat as starting from 0
// console.log(newString);

const anotherString = gameName.slice(-9,4)
// console.log(anotherString);


const newStrinOne = "    hitesh      "
// console.log(newStrinOne.trim());
 




const url = "https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20', '-'));



// console.log(url.includes('hitesh'));


console.log(gameName.split('-'));


