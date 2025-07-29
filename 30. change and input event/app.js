// change event :it trek final and initial change 

// let form = document.querySelector("form")

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// })


// let user = document.querySelector("#user")

// user.addEventListener("change", function(){
//     console.log("change event")
//     console.log("the final value is ", user.value);
// });




// 2. input event 

let form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault();
})


let user = document.querySelector("#user")

user.addEventListener("input", function(){
    console.log("input event")
    console.log("the final value is ", user.value);
});