//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}

one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);







//   +++++++++++++++++++++ interesting ++++++++++++++++++++++++




console.log(addone(5)) // this will give output correctly
function addone(num){
    return num + 1
}


addTwo(5)    // this will give error since it above the declaration of the function or variable, this concept is called hoisting
const addTwo = function(num){   // addTwo is a variable known as expression since it is holding a function in it 
    return num+2
}




