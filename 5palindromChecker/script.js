const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

// palindrome checker function from FCC JS course
function palindrome(){
    const word = document.querySelector(".input-text").value;
    let regex = /[_\W]/gi; //match all underscores and non-word characters (symbols)
    let cleaned = word.replace(regex,"").toLowerCase();
    let reversed = cleaned.split('').reverse().join('')
    if (word == ""){
        result.innerHTML = "Enter a word please."
    }
    else if (reversed === cleaned){
        result.innerHTML = word.toUpperCase() + " is a palindrome"
    }
    else{
        // string interpolation
        result.innerHTML = `${word.toUpperCase()} is NOT a palindrome`
    }
  }

btn.addEventListener("click",palindrome);