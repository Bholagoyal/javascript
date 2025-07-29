let form = document.querySelector("form")

// form.addEventListener("submit", function(){
//     alert("form submitted");
// } )

 
// to prevent it from the default action of the event 
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     alert("form submitted");
// } )







//  how to extract form data : we can acces it through its value property

form.addEventListener("submit", function(event){
    event.preventDefault();
    
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.innerText);
//     console.log(inp.value);
// } )

// for multiple 


//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`hye ${user.value}, your password is set to ${pass.value}`);
// });




// another way for extacting the data 
console.dir(form);

let user = this.elements[0];
let pass = this.elements[1];

 console.log(user.value);
 console.log(pass.value);

     alert(`hye ${user.value}, your password is set to ${pass.value}`);
});