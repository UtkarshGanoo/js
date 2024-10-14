// prototype
/*let a = {

name:"utkarsh",
mob:"9575335089",
clg:"iist"

}
console.log(a)


let p = {

   run: ()=>{
    alert("prototype is running")
   }
    
    }
    a.__proto__= p
    a.run()*/


// classes and objects
/*
class Bus{
    ticket (){
       console.log("ticket toh le pehle bhai")
    }
    submit(){
        alert("abe sale ticket le ke toh ja seat chahiye toh")
    }
}
   
let utkarsh = new Bus()
let sub = new Bus()
 
utkarsh.ticket()
sub.submit()*/


//constructor
/*
class Bus{
    constructor(){
        console.log("constructor called")
    }
    ticket (){
       alert("ticket toh le pehle bhai")
    }
    submit(){
        alert("abe sale ticket le ke toh ja seat chahiye toh")
    }
}
   
let utkarsh = new Bus()
let sub = new Bus()
 
utkarsh.ticket()
sub.submit()*/


//inheritance & extands keyword


/* 
class animal {
    eating(){
        console.log("this is eating")
    }
    running(){
        console.log("this is eating")
    }
    dancing(){
        console.log("this is dancing")
    }
    sleeping(){
        console.log("this is eating")
    }
}
class dog extends animal(){
    
}
let m = new dog();
// let n= new.animal()
m.sleeping();
*/

// constructor with method overriding
/*
class emp{
    
    logout(){
        console.log(`employe is logout `)
    }
    leave(){
        console.log(`employe is leave `)
    }
    sick(leave){
        console.log(`employe is request for sick ${leave} `)
    }
}

class men extends emp{
    login(){
        console.log(`employe is login `)
    } 
    sick(){
        // console.log(`employe is request for sick ${leave} `)
        super.sick(5)
    }
}*/
/*let utkarsh = new emp() 
utkarsh.sick();
utkarsh.login();
utkarsh.logout();*/
/*
const utkarsh = new men();
utkarsh.sick(4);
utkarsh.login();
utkarsh.logout();
*/


//constructor mthod overriding
// ager child class mai koi constructor nahi banaya hai toh js engine child class mai automatically bna kar call ho jata h
/*
class emp{
    
    logout(){
        console.log(`employe is logout `)
    }
    leave(){
        console.log(`employe is leave `)
    }
    sick(leave){
        console.log(`employe is request for sick ${leave} `)
    }
}

class men extends emp{
    sick(leave){
        // console.log(`employe is request for sick ${leave} `)
        super.sick(5)
    }
    }

// let utakrsh = new men ()
let utkarsh=new emp ()
utkarsh.leave()
utkarsh.sick(3)*/

//static method
/*class emp {
   constructor(name){
    this.name=name
   }
   walk(){
    console.log(" this employe " + this.name + " is emp")
   }
   static Capitalize(name){
    return name.charAt(0).toUpperCase() + name.substring(1)
   }
}
let j = new emp(emp.Capitalize(" ram "))
j.walk()*/

//destructurig aray

/*let arr = [3,5,8,2,6]
let [a,b,c,d]=arr;
console.log(a,b,c,d)*/


//spread 

/*
let obj = {
    name:"utkarsh",
    address:"vikas nagar",
    mobileno:"9575335089"
}
console.log({...obj , name: " poorva " , address: " goyal nagar"})//it give output with changing values 
console.log({ name: " poorva " , address: " goyal nagar" ,...obj})*///it give output without changing  any values 












































