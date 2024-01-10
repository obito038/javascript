
const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : "ruby"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} is for ${myObject[key]}` );
}



const prog = ["js", "cpp", "css", "java", "py"]
for (const key in prog) {
    // console.log(key);   
    // console.log(prog[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('PAK', "Pakistan")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}