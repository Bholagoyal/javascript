// let names= ["tony","bruce","steve","peter"];
// // let [winner, runnerup] = names; //they will assign the value as per above arr index
// let[winner, runnerup, ...others]= names; // destructing with rest
// console.log(winner,runnerup,others);
// // console.log(winner, runnerup);




//  destructing of the objects
const student={
    name:"karan",
    age:14,
    class:9,
    sunjects:["hindi","english","maths","science","sccial science"],
    username: "karan@123",
    password: "abcd"
    // city : "pune"
};

// let username= student.username;
// let password= student.password;

let {username : user, password : secret, city = "mumbai"}= student;