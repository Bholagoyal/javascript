// let arr=[1,2,3,4,5];

// function print(el) {
//     console.log(el);
// }

// arr.forEach(print);

//  or

// arr.forEach(function(el) {
//     console.log(el);
// });

let arr2= [ {
    name: "karan",
    marks:99
}, {
    name: "param",
    marks:55
}, {
    name: "vishnu",
    marks:33
}];

arr2.forEach( (student) => {
    console.log(student.marks);
})