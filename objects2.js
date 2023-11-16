// const tinderUser = new Object()            /* way 1 to declare an empty object */
const tinderUser = {}                         /* way 2 to declare an empty object */

tinderUser.id = "abds"
tinderUser.mname = "SM"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


/* decalring objects inside of a object */

const regularUser ={
    email: "SM@GMAIL.COM",
    fullname: {
        usersfullname: {
            firstname: "Sayanatn",
            lastname: "Mondal"

        }
    }
}

// console.log(regularUser.fullname.usersfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}


// const obj3 = { obj1, obj2 }                 /* returns object with two objects */

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}       /* spread operator */
// console.log(obj3);



const users =  [
    {
        id: 1,
        email: "pm@gmail.com",        /* used in database */           
    },
    {
        id: 1,
        email: "pm@gmail.com",
    },
    {
        id: 1,
        email: "pm@gmail.com",
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));       /* imp */
// console.log(Object.values(tinderUser));       /* imp */
// console.log(Object.entries(tinderUser));       /* imp */

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));        /* checks if the obj has the prop or not */




/* destructring of object */

const course = {
    coursename: "js bootcamp",
    price: "999",
    courseInstructure: "hitesh sir"
}

// course.courseInstructure

const {courseInstructure: instructor} = course                      /* clean code writing - to avoid 'course.' multiple times while trying to access object props*/

// console.log(courseInstructure);
console.log(instructor);



/* JSON */
// {
//     "coursename": "js bootcamp",
//     "price": "free ",
//     "courseInstructure": "hitesh sir"
// }
