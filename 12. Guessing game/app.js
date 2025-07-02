const max = prompt("enter the max number");
// console.log(max);

const random= Math.floor(Math.random() * max) + 1;
// console.log(random);

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("congrats , you won ! random number was" , random);
        break;
    }
    else if( guess < random){
        guess = prompt("your number is too small, please try again");
    } 
    else{
         guess = prompt("your number is too large, please try again");
    
    }
       
    
}
