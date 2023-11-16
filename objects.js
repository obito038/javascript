// // singleton

// Object.create


//object lietrals


const mySym = Symbol("key1")

const JsUser = {
    name: "pm",//name is processed as string
    "full name": "Prasun mondal",
    age: 22,
    // mySym: "mykey1", / its not the right way to use a symbol as a key 
    [mySym]: "mykey1",
    location: "kol",
    email: "pm@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}



// console.log(JsUser.name); // way 1 to access
// console.log(JsUser["name"]); // way 2 to access

// console.log(JsUser["email"]);

// console.log(JsUser.full name); // we can't write this
// console.log(JsUser["full name"]); //correct way

// console.log(JsUser.mySym); // wrong way
// console.log(JsUser[mySym]); //correct way

//  console.log(typeof JsUser.mySym); 




/* Updtaing values of object */

JsUser.email = "pm@yahoo.com"
// console.log(JsUser["email"]);

/*freezing the object*/
// Object.freeze(JsUser)

JsUser.email = "pm@amzon.com"
// console.log(JsUser);


/* functions*/
JsUser.greeting = function(){
    console.log("hello");
}

console.log(JsUser.greeting); //returns function type
// console.log(JsUser.greeting());

