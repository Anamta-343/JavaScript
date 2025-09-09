function vowels(sentence){
    let count = 0;
    for(let element of sentence){
        if(element === "a"|| element ==="e"|| element ==="i"|| element ==="o"|| element ==="u"){
            count++;
        }
    }
    console.log(count);
}
vowels("i loved this one");
 
// USING ARROW FUNCTION
const countVowels = (sentence) => {
    let count = 0;
    for(let element of sentence){
        if(element === "a"|| element ==="e"|| element ==="i"|| element ==="o"|| element ==="u"){
            count++;
        }
    }
    console.log(count);
}
countVowels("aap kaise hai");

// For each loop

let arr = [2,3,4,5,6,7];

arr.forEach( (val) => {
    console.log(`Square of ${val} is ${val*val}.`);
});

// Filter

let stuMarks = [45,67,43,98,98,78,90,91];
let maxScore = stuMarks.filter((val) => {
    return val>90;
})
console.log(maxScore);

// REDUCE

let n = prompt("Enter number");
let aray = [];
let i=1;
while(i<=n){
    aray[i-1]=i;
    i++;
}
console.log(aray);

let sum1 = aray.reduce((res,curr) => {
    return res+curr;
});
console.log("Sum is",sum1);

let fact = aray.reduce((res,curr) => {
    return res*curr;
});
console.log("Factorial is",fact);

