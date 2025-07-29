h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color= "red";
// }, 1000 )


// setTimeout(() => {
//     h1.style.color= "orange";
// }, 2000 )


// setTimeout(() => {
//     h1.style.color= "green";
// }, 3000 )

// we can write this all in the function in another way


// function changeColor(color, delay,  ){
//     setTimeout(() => {
//             h1.style.color= color;
//          }, delay)
// }

// changeColor("red", 1000)
// changeColor("pink", 2000)
// changeColor("blue", 3000)


// now if our first line of code will not work properly than also it will execute other two and to stop it there we will use another agrument

function changeColor(color, delay, nextColorChange ){
    setTimeout(() => {
            h1.style.color= color;
           if(nextColorChange) nextColorChange();
         }, delay)
}

changeColor("red", 1000, () => {
    changeColor ("blue", 1000, () => {
        changeColor("green", 1000);
    });
});
// similarly we can add many more (nesting of the callback) and all three methods create callback hell by callback nesting   and this is call backhell.
