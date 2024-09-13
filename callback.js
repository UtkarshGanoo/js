// setTimeout(function(){
//     console.log('hey i am utkarsh');

// }, 11000);

//callback
//synchronous callback program
/*function mul(a,b){
    console.log(a*b);
}


function answer(a,b,mul){
    mul(a,b);
}

answer(2,2,mul)*/


//asynchronous callback programing
/*function sum(a,b){
c=a+b
    console.log(c)

}

setTimeout(sum,3000,47,5)*/



//callback hell problem

/*function getdata(dataid, getnxtdata) {
    setTimeout(() => {
        console.log("data", dataid);
        if (getnxtdata) {
            getnxtdata();
        }
    }, 3000);
}

console.log("your data is generating.........!")    //-------------------------------------//|
getdata(1, () => {                                                                         //|
    console.log("your data is getting 1............!")                                     //|
    getdata(2, () => {                                                                     //|
        console.log("your data is getting 2............!")                                 //|
        getdata(3, () => {                                                                 //|----------------------------callback hell problem (pyramid)
            console.log("your data is getting 3............!")                             //|
            getdata(4, () => {                                                             //|
                console.log("your data is getting 4............!")                         //|
                getdata(5, () => {                                                         //|
                    console.log("your data is getting 5............!")//-------------------//|

                });
            });
        });
    });
});*/
 
//promises

let promise = new Promise((resolve,reject)=>{
resolve(123)
alert("hey!! utkarsh ganoo")
})