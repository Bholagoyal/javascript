let btns = document.querySelectorAll("button");

for(btn of btns){
    // passing multiple function to get executed
    // btn.addEventListener("click", sayhello)
    // btn.addEventListener("click", sayName)
    btn.addEventListener("dblclick", function(){
        console.log("you double clicked on it");
    })
}

function sayhello(){
    alert("Hello");
}

function sayName(){
    alert("event listerner")
}
