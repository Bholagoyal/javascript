// function sum(...args){
//     // arguments
//     for(let i=0; i<args.length; i++){
//         console.log("you gave us :", args[i])
//     }
// }


// function min(a,b,c,d){
//     console.log(arguments);
//     console.log(arguments.length);
// }

function sum(...args){
    return args.reduce( (sum, el) => sum +el);
}
