// const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network call
//     setTimeout(function(){
//         console.log('Async thask is cmplt');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })





//way2

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async to resloved");
// })






//Way3

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "pm", email: "pm@gmai.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "pm", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
// promiseFour.then().catch()
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally()
