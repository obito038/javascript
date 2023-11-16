const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]
// marvel_heros.push(dc_heroes)                                         /* push values in the existing array */ 

// console.log(marvel_heros);

// const all_heroes = marvel_heros.concat(dc_heroes)                    /* concat operator returns a new array */

// console.log(all_heroes);

const all_new_heroes = [...marvel_heros,...dc_heroes]                 /* spread operator */

// console.log(all_new_heroes);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_arr = another_arr.flat(Infinity)

// console.log(real_another_arr);
console.log(Array.isArray("prasun"));
console.log(Array.from("prasun"));
console.log(Array.from({name: "Prasun"}));                       /* imp for interview */ 



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));