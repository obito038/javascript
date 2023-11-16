//array

// const myArray = [0, 1, 2, 3, 4, 5, true, "Prasun"]
const myArray = [0, 1, 2, 3, 4, 5]

const myHeros = ["dc", "marvel"]

const myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArray[0]);



/* Array meythods */ 

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)                                     /* adds values in the first of the array */ 
// myArray.shift()                                        /* deletes the fisrt value from arr */ 


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));
// console.log(myArray.indexOf(5));


const newArr = myArray.join()                         /* converts array to string datatype */ 
// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);


/* slice, splice operator */

console.log("A", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);

