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
let m= new.()
// let n= new.animal()
dog.m()
