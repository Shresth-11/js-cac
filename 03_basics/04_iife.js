// Immediately invoked function expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`)
})();


// ()()

// global scope k pollution se problem hoti hai kai baar toh uss global scope k jo variables ya jo bhi declarations h to uss pollution ko htane k liye hum iife ka use krte hain


// (() => {
//     console.log(`DB CONNECTED`); 
// })();  // isme lgana pdega semicolon ni error aayega 


((name) => {
    console.log(`DB CONNECTED ${name}`); 
})("Shresth"); 