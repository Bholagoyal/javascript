// special default argument : event argument 

// let btn = document.querySelector("button");

//  we have default agrument in our call back that is event argument
// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("btton clicked")
// })
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("btton clicked")
// })



// KeyboardEvent 

let inp = document.querySelector("input");


// 1. keydown 
// inp.addEventListener("keydown", function(){
//     console.log("key was pressed");
// })

// 2. keyup
// inp.addEventListener("keyup", function(){
//     console.log("key was released");
// })

// to check the event type and proerties of event 
inp.addEventListener("keyup", function(event){
    console.log(event.key);
    console.log(event.code)
    console.log("key was released");
})
