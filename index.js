


// TO CHECK THE CANDIDATE IS GOOD TO JOIN IN COMPANY 

const prompt = require("prompt-sync")();
let marks = prompt("What Is Your Marks:");
a = Number.parseInt(marks);
if (marks <0) {
  alert("Invalid Marks");
} 
else if(marks >20 && marks <=40) {
  console.log("You Are Not Qulified");
}
else if(marks>40 && marks <= 60){
  console.log("You Are Qullified In Exam");
}
else if(marks >60 && marks <=80){
  console.log("You Are Quliffied With Good Marks");
} 
else if(marks >80 && marks <=90){
    console.log("You Can Join In My Company");
}
else if (marks>90 && marks<=100){
  console.log("You Can Join As Maneger");
}
else {
    console.log("You Can Join As",(marks<19)?"Employe":"Maid");
}



    /*const prompt = require('prompt-sync')();
    let a = prompt("whats your age");
    a = Number.parseInt(a);
    if(a<0){
        console.log("this is invalid age ");
    }
    else if(a<9){
        console.log("you are kid");
    }
    else if(a<18 && a>=9){
        console.log("you can only think to drive");
    }
    else{
        console.log("you can drive");
    }*/