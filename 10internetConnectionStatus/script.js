window.addEventListener("load",(e)=>{
    const statusDisplay = document.querySelector("#status");
    statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
})

window.addEventListener("offline",(e)=>{
    const statusDisplay = document.querySelector("#status");
    statusDisplay.textContent = "Offline";
})

window.addEventListener("online",(e)=>{
    const statusDisplay = document.querySelector("#status");
    statusDisplay.textContent = "Online";
})

// above works even if there's no active internet connection.
// only if connected to a network

const image = document.querySelector("#image");
const statusDisplay = document.querySelector("#status");
const bgColor = document.querySelector("#main");

function setColor(){
    bgColor.classList.add("online")
}
async function connectionStatus(){
    try{
        const fetchResult = await fetch("https://commons.wikimedia.org/wiki/Main_Page?time=" + (new Date().getTime());
        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300
    } catch (error){
        console.log(error);
    }
}
