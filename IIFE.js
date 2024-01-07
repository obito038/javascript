// Immediately Invoked Function Expressions (IIFE)
//to remove the pollution done by gloabl scope of variables

// function chai() {
//     console.log("DB connected");
// }
// chai()


/* named IIFE */
(function chai() {
    console.log(`DB connected`);
})();                             // ; is imp to end the IIFE function execution

// ()()                  //syntax
/* function defintion wrapped in () */ /* function calling for exectuion*/


/* unnamed IIFE */

( () => {
    console.log(`DB conneted Two`);     // syntax like arrow function
} )();

/* IIFE with parameter */
( (name) => {
    console.log(`DB conneted Two ${name}`);     // syntax like arrow function
} )(`pm`)