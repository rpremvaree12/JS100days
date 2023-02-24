// querySelector vs getElementbyId
// const subtract = document.querySelector(".subtract");
// const resetCount = document.querySelector(".reset");
// const add = document.querySelector(".add");

// instead of creating an event listener for each button, create one for the container
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

// add.addEventListener("click",()=>{
//     count.innerHTML++;
// })

// subtract.addEventListener("click",()=>{
//     count.innerHTML--;
// })
// resetCount.addEventListener("click",()=>{
//     count.innerHTML = 0;
// })

// event delegation
// add single event listener to the parent element

buttons.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor();
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor();
    }
});

function setColor(){
    if(count.innerHTML > 0){
        count.style.color = "yellow"
    } else if (count.innerHTML < 0){
        count.style.color = "orangered"
    } else{
        count.style.color = "white";
    }
}