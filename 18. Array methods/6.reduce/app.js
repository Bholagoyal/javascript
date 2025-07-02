//  let num = [1,2,3,4];
//  let finalValue = num.reduce( (res , el) => res + el, );
//  console.log(finalValue);


// finding the max value of the array by reduce mathod
let arr=[1,4,2,5,6,7,2,9,2];
let max=arr.reduce((max,el) =>{
    if(max<el){
        return el;
    }else{
        return max;
    }
}
);
console.log(max);