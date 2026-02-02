// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()   // map stores unique key value value , it is an object 
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")



// console.log(map);


for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {   //maps are iterable , objects are not iterable there is another way to iterate over an object , we use for-in loop to do so
//     console.log(key, ':_', value);
    
// }