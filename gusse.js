let prompt = require('prompt-sync')();
let number;
let guess = Math.floor(Math.random() * 100);
let attmp=0;
number=Number.parseInt(number);

while(number!=guess ){                       
    number= prompt("Enter The Number");


    if(number > guess){
        console.log ("your no is grater then guess");
        attmp++;
    } 
    else if (number < guess){
        console.log("your no is less then guess");
        attmp++;  
    }
    else if (number==guess){
        console.log("congratulation! your guess is right ",attmp);
    }  
}




