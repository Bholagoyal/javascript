// function multipleGreet(func , n){
//     for (let i = 1; i <= n; i++) {
//         func();
        
//     }
// }
// let greet = function(){
//     console.log("hello");
// }

// multipleGreet(greet,10);




//  returning a function as a output (odd even factory func)
function oddEvenTest(request){
    if(request== "odd"){
        return function(n) {
            console.log(!(n%2 == 0));
        }
    }else if( request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request")
    }
}

let request= "odd";