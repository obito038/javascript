
const coding = ["js", "py", "cpp", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

coding.forEach( (item) => {           //using arrow function
    // console.log(item);                 
} )




// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )




//IMP in db//

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }   
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
} )