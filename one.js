// if

// if (true){

// }

// if (false){

// }


// const isUserloggedIn = true
// const temp = 16

// if (temp < 20) {
//     console.log("less than 20");
// } else {
//     console.log("greater than 20");
// }
// console.log("ex");

// if (2 == "2"){
//     console.log("true");
// }

// if (2 === "2"){
//     console.log("same type");
// }
// else console.log("not same type");

// if (2 != 3){
//     console.log("yes ");
// }



// <, >, <=, >=, ==, !=, === (comparison & check data type)


// const score = 200
// if (score > 100) {
//     const power = "fly"
//     var power = "fly" // dont use 
//     console.log(`User power: ${power}`);
// }
//  console.log(`User power: ${power}`);



const balance = 1000

// if (balance > 500) console.log("test"); // implicit scope

// if (balance < 500 ) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const UserloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (UserloggedIn && debitcard && 2==3) {
    console.log("allowed to buy");
}

if (loggedInFromEmail || loggedInFromGoogle || guestUser) {
    console.log("user logged in");
}