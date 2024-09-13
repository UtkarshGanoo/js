let pro= new Promise((resolve,reject)=>{
    console.log("hey utkarsh your promise is pendding now it will executed after some time")
setTimeout(() => {
    console.log("hey utkarsh  i am a promise  and i executed")
    // resolve(true)
    reject(new Error("hey i am an error"))
}, 2000);
})