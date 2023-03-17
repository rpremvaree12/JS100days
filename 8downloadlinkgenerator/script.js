// create variables
const glink = document.querySelector("#glink");
const generateLinkbtn = document.querySelector("#generateLinkbtn");
const downloadLink = document.querySelector("#download-link");

generateLinkbtn.addEventListener("click", generateLink);

function generateLink(e){
    e.preventDefault();
    const gLinkValue = glink.value;
    const isLink = gLinkValue.includes("https://drive.google.com/file/d/");

    if(isLink){
        const downloadLink = gLinkValue.replace("https://drive.google.com/file/d/","https://drive.google.com/uc?export=download&id=").replace("/view?usp=share_link","");
        

        function copyText(target){
            if(target.value == ""){
                console.log("empty")

            }else{
                console.log("not empty")
                downloadLink.value = downloadLink;

                target.select();
                navigator.clipboard.writeText(downloadLink.value).then(()=>{
                    generateLinkBtn.textContent = "Copied!";
            
                    setTimeout(()=>{
                        btn.textContent = "Copy";
                    },1500);
                })
            }
        }

        const copyBtn = document.querySelector("#copyBtn");

        copyBtn.addEventListener("click", ()=>{
            console.log("copy text btn");
            return copyText(downloadLink);
        })


    }





}


// https://drive.google.com/file/d/157y63JlZKrcuccMUL3trI_dy04_wC7Q1/view?usp=share_link