// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick =  function(){
//     console.log("liked your post");
// };




// for handling multiple button 
let btns = document.querySelectorAll("button");

for(btn of btns){
    // onclick event
    btn.onclick = sayHello;
    // onmouseenter event 
    btn.onmouseenter = function(){
        console.log("you hoverwd on btn")
    }
}

function sayHello(){
    alert("Hello");
}