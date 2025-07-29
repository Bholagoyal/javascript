//  simple function
// function greet() {
//     return "hello:"
// }

//  async function : write async keyword before the function
async function greet() {
    throw "weak connection" // to throw any error manaually
    return "hello:"
}

// now applying methods of promise on the function
greet()
    .then((result) => {
        console.log("promise was resolved")
        console.log("result was :", result)
    })
    .catch((err) => {
        console.log("promise was rejected with the error : ", err)
    })
