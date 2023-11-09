// const promiceOne = new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//         console.log('Async task is compelete');
//         resolve({userName: "anas shahid", age: 27});
//     },1000);

// })

// promiceOne.then(function(data){
//     console.log(data);
// })

const promiceTwo = new Promise(function(resolve,reject){
    let error = false;
    if(!error)
    {
        resolve({userName: "anas", pass: "123"});
    }
    else{
        reject('ERROR: Something went wrong');
    }
})

promiceTwo.then( (user)=>{
    console.log(user);
    return user.userName;
}).then( (username)=>{
    console.log(username);
}).catch( (error)=>{
    console.log(error);
});