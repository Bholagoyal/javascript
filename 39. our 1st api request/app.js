let url = "https://catfact.ninja/fact"

// fetch(url)
// .then((res) => {
//     console.log(res);
//     console.log(res.json())
// })
//     .catch((err) => {
//         console.log("Error - ", err)
//     })





// we know fetch function return promise in response of api requests, so we can apply methods of promise on it 

// fetch(url)
//     .then((res) => {
//         console.log(res);
//         res.json().then((data) => {
//             console.log(data);
//         })
//     })
//     .catch((err) => {
//         console.log("Error - ", err)
//     })






// another compact / simpler version of above code  with extra chaining of methods  

fetch(url)
.then((res) =>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("data1 =" ,data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("data2 = ",data2.fact)
})
.catch((err)=>{
    console.log("ERROR -", err)
});