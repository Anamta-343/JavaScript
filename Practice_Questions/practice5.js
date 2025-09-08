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