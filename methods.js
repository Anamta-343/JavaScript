// METHODS

// forEach loop

let arr = [1,2,3,4,5];
arr.forEach((val) => {    //call back function
    console.log(val);
});

let city = ["mumbai","pune","jbp","bhopal"];
city.forEach((val,idx,city) => {
    console.log(val.toUpperCase(),idx,city); // (value,index,array itself)
});

// MAP

let nums = [56,3,4,78,32];
let newArray = nums.map((val)=>{
    return val**2;
});
console.log(newArray);

// FILTER

let number = [1,2,3,4,5,7,6];

let evenNumber = number.filter((val) =>{
    // return val%2 === 0;
    // return val % 2 !== 0;
    return val >3;
});
console.log(evenNumber);

// REDUCE

let array = [1,2,3,4];
let sum = array.reduce( (result,curr) =>{
    return result+curr;
})
console.log(sum);

let maximum = array.reduce( (result,curr)=>{
    return result > curr ? result : curr;
})
console.log(maximum);





