function myName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("S");
    console.log("U");
    console.log("N");
}

myName         /* its only refernce , so no o/p wll be there  */
// myName()


// function addTwoNumbers(number1, number2){
//     console.log( number1 + number2 );
// }



function addTwoNumbers(number1, number2){
    // let result = number1 + number2 
    // return result 
    return number1 + number2
}


// addTwoNumbers(2, 4)           /* adds two numbers */

// addTwoNumbers(2, "4")         /* as one is string, converts bith into strings and concatinate them */

// addTwoNumbers(2, "a")

// addTwoNumbers(2, null)


const result = addTwoNumbers(6, 4)               //wrong way to strore output of result
// console.log("result", result);




function loginUserMessage(username = " pm"){
// if(username === undefined){                               /* way 1 */
//     console.log("please enter a username");
//     return
// }
if(!username){                                               /* way 2 */
    console.log("please enter a username");
    return
}
    return `${username} just logged in`                       /* string interpolation */

}
// console.log(loginUserMessage("pm"));

// console.log(loginUserMessage());        /* imp for interview */
//undefined argument




function calculateCartPrice(...num1){          //rest operator
    return num1
}
// console.log(calculateCartPrice(200, 500, 600, 700, 300, 900, 2000));

// o/p : [ 200, 500, 600, 700, 300, 900, 2000 ]



//* Imp interview question *//

function calculateCartPrice(val1, val2, ...num1){          //rest operator
    return num1
}
// console.log(calculateCartPrice(200, 500, 600, 700, 300, 900, 2000));
// o/p : [ 600, 700, 300, 900, 2000 ]


const user = {
    username: "pm",
    price: 99

}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}

// handleObject(user)            /* way 1 */
handleObject({
    username: "pm",              /* way 2 */
    price: 790
})


const myNewArray = [200, 300, 400, 500, 700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));                            /* way 1 */

console.log(returnSecondValue([200, 300, 400, 500, 700]));               /* way 2 */
