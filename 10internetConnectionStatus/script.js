const icon = document.querySelector("#statusIcon");
const statusDisplay = document.querySelector("#status");
const bgColor = document.querySelector("#main");

function setColor(){
    bgColor.classList.add("online");
    icon.classList.add("fa-solid")
    icon.classList.add("fa-wifi")
}

window.addEventListener("load",(e)=>{
    const statusDisplay = document.querySelector("#status");
    statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
    setColor();
    // fa-wifi-slash
})

window.addEventListener("offline",(e)=>{
    const statusDisplay = document.querySelector("#status");
    statusDisplay.textContent = "Offline";
    setColor();
})

window.addEventListener("online",(e)=>{
    const statusDisplay = document.querySelector("#status");
    statusDisplay.textContent = "Online";
    setColor();
})

// above works even if there's no active internet connection.
// only if connected to a network

async function connectionStatus(){
    try{
        const fetchResult = await fetch("https://commons.wikimedia.org/wiki/Main_Page?time=" + (new Date().getTime()));
        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300
    } catch (error){
        console.log(error);
    }
}
