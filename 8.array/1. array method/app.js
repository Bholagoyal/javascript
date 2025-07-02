let cars=["toyta","maaruti","honda"];
let city=["agra","mathura","noida","kota"];
let color= ["red","pink","yellow","black"];
let conum = [1,2,4,87,99,123,6,1,0];

// 1.push method
// cars.push("audi");

// 2.pop method
// cars.pop("audi");

// 3.unshift method 
// cars.unshift("audi");// add in starting index

// 4.shift method
// cars.shift("audi");


// 5.indexof method
// console.log(cars.indexOf("maaruti"));


//  6.include method 
// console.log(cars.includes("honda"));  


// 7.concat method = used for merging array
// console.log(city.concat(cars));

// 8.reverse method (note it make the permanent changes)
// console.log(color.reverse());
// console.log(color);

// 9.slice method = used for copying a portion of the array
// console.log(color.slice(1,4));
// console.log(color.slice());
// console.log(color.slice(1));
// console.log(color.slice(-2)); //giving negative values means we want values from the end of the array 
// console.log(color.slice(color.length));


// 10. splice method= removes/replace/ add element 
//      syntax = splice(Start,deletecount,item0,item1 to itemN);
// it make permanent changes in our array
// console.log(cars.splice()); // print full car array
// console.log(cars.splice(1)); //print from 1st index to last and removes them permanantly
// console.log(cars); // print original array after deletion
// console.log(cars.splice(0,1,"fortuner","buggaadi")); // will remove oth index element and add other two elements in the array
// console.log(cars); //print original array after adding element in array
// console.log(cars.splice(1,0,"scooty"))//adding item on 1st index
// console.log(cars);
// console.log(cars.splice(1,3)); //print 1st and 2nd index element of updated array
// console.log(cars.splice());

// 11. sort method= used to sort the string generally because it does not work well on the numbers as it first convert the the num to string and than based on unicode of the string characters it do sorting
// console.log(color.sort());
// console.log(conum.sort()); //it will not sort it properly





