// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE (function with a name)
    console.log(`DB CONNECTED`)  // we can use IIFE so that global scope/variables hould not affect the execution
})();  // here semicolon is mandatory

// ()() -- first one function definition, the second one is execution

// IIFE is used to execute function quickly and run should not affect from global scope variable

( () => {
    // UnNamed IIFE (function without a name)
    console.log(`DB CONNECTED Again`)
}) ();

( (name) => {
    console.log(`DB CONNECTED Again , ${name}`)
}) ("ABV");