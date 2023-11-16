const name = "pm"
const repoCount = 50

// console.log(name + repoCount + "value"); // old style
// console.log(`Hello my name is ${name} and my repo name is ${repoCount}`);//string interpolation

const gameName = new String('p-mondal-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Prasun   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://prasun.com/prasun%20mondal"

console.log(url.replace('%20', '-'));

console.log(url.includes('mondal'));

console.log(gameName.split('-'));