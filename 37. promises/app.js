// first to understand how promises improves call back hell we will take a condtion where the call back hell is occuring 

// function saveToDb(data){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed >4){
//         console.log("your data was saved :", data);
//     } else{
//         console.log("weak coonection, data not saved");
//     }

// }
// saveToDb("promises")


// now if we want after saving the data our work sholud take place in  the function so we will use call backs

// function saveToDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }

// }

// saveToDb(" apna college", () => {
//     console.log("your data was saved :")
//     saveToDb("hello world", () => {
//         console.log("success2 : data 2 saved");
//         saveToDb("bhola", () => {
//             console.log(" success 3: data 3 saved");
//         },
//             () => {
//                 console.log("failuer 3 : weak connection");
//             }
//         )
//     }, () => {
//         console.log("failure 2 : weak connection")
//     })
// },
//     () => {
//         console.log("weak coonection, data not saved");
//     }
// );
// we can clearly  see call back hell in above code  




// applying promises init 
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success: data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}



// now using methods of js that is .then() and .catch() to perform task after promise rejection and resolve
// let request = saveToDb("promises") // request is the promise object
// request
// .then(() => {}
//     console.log("promise was resolved")
//     console.log(request);
// 
// })
// .catch(() => {
//     console.log("promise was rejected ")
//     console.log(request);
// }); 




// anotherway to write it 
// saveToDb("promises")
// .then(() => {
//     console.log("promise was resolved")
// })
// .catch(() => {
//     console.log("promise was rejected ")
// }); 


//  now promise chaining
// saveToDb("promises")
// .then(() => {
//     console.log("data 1 saved. promise was resolved");
//     saveToDb("helloworld")
//     .then(() => {
//         console.log("data2 saved")
//     })
// })
// .catch(() => {
//     console.log("promise was rejected ")
// }); 


// another way of writing same code (improved code).. it is promise chaining
saveToDb("promises")
.then(() => {
    console.log("data 1 saved. promise was resolved");
    return saveToDb("helloworld");
})
    .then(() => {
        console.log("data2 saved");
        return saveToDb("bhola");
    })
    .then(() => {
        console.log("data3 saved")
    })
.catch(() => {
    console.log("promise was rejected ")
}); 



