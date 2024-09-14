/* async function weather() {
    let indore= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("25 deg")
        }, 2000);
    })
    let dewas= new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("55 deg")
        }, 4000);
    })
    // indore.then(alert)
    // dewas.then(alert)
    console.log(" wait untill indore weather fetch ")
    let indorew = await indore
    console.log(" wait untill indore weather fetched " + indorew)

    console.log("wait untill dewas weather fetch")
    let dewasw  = await dewas
    console.log(" wait untill dewas weather fetched " + dewasw)


}
console.log(" welcome to the fake weather ")
let b= weather()
b.then((value)=>{

    console.log(value)
})
*/