// to print counting
// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;
// }



// movie guessing game
const favMovie="avatar";

let guess = prompt("guess my fav movie");
while((guess != favMovie)&& (guess != "quit")){
    guess=prompt("wrong guess. pllease try again");
}

if(guess== favMovie){
    console.log("congrats")
}else{
    console.log("you quit");
}


