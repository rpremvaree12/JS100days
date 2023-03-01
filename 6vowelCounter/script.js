const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

// palindrome checker function from FCC JS course
function countVowels(){
    const word = document.querySelector(".input-text").value;
    let regex = /[aeiou]/gi; //match all vowels ignore case
    let listofvowels = word.match(regex);
    let count = listofvowels.length;
    result.innerHTML = `${word} has ${count} vowels.`
}

btn.addEventListener("click",countVowels);