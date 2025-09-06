// let number=prompt("Enter number:");
// if(number%5 === 0){
//     console.log(number," is a multiple of 5");
// }
// else{
//     console.log(number," is NOT a multiple of 5");
// }

let marks=prompt("Enter marks : ");
let grade;
if(marks >= 80 && marks <=100){
    console.log(grade="A");
}
else if(marks >= 70 && marks <=89){
    console.log(grade="B");
}
else if(marks >= 60 && marks <=69){
    console.log(grade="C");
}
else if(marks >= 50 && marks <=59){
    console.log(grade="D");
}
else{
    console.log(grade="F");
}