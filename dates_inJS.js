let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);//**imp for interview */

// let myCreateDate = new Date(2023, 0 , 23)
let myCreateDate = new Date(2023, 0 , 23, 5, 3)

// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Date.now()/1000); //imp interview questions
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

`${newDate.getDate()} and the time`
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}));