// this works even if there's no active internet connection.
// only if connected to a network - false signal

// // when window loads
// window.addEventListener("load",(e)=>{
//     const statusDisplay = document.querySelector("#status");
//     statusDisplay.textContent = navigator.onLine ? "Online" : "Offline";
//     setColor();
//     // fa-wifi-slash
// })

// // when changes to offline
// window.addEventListener("offline",(e)=>{
//     const statusDisplay = document.querySelector("#status");
//     statusDisplay.textContent = "Offline";
//     setColor();
// })

// // when changes to online
// window.addEventListener("online",(e)=>{
//     const statusDisplay = document.querySelector("#status");
//     statusDisplay.textContent = "Online";
//     setColor();
// })
const icon = document.querySelector("#statusIcon");
const statusDisplay = document.querySelector("#status");
const bgColor = document.querySelector("#main");

async function connectionStatus(){
    try{
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time='+ (new Date()).getTime());
        
        return fetchResult.status >= 200 && fetchResult.status < 300
    } catch (error){

        bgColor.classList.remove("online");
        icon.classList.remove("fa-heart-pulse");

        icon.classList.add("fa-heart-crack");
        statusDisplay.textContent = "You are OFFLINE";

    }
}


setInterval(async ()=>{
    const result = await connectionStatus();
    if (result){
        statusDisplay.textContent = "You are ONLINE";
        bgColor.classList.add("online");
        icon.classList.add("fa-heart-pulse")
    }
}, 3000);

window.addEventListener("load", async(event)=>{
    if(connectionStatus()){
        bgColor.classList.add("online");
        icon.classList.add("fa-heart-pulse")
        statusDisplay.textContent = "You are ONLINE";
    }else{
        icon.classList.add("fa-heart-crack");
        statusDisplay.textContent = "You are OFFLINE on load";
    }
})