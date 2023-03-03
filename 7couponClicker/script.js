const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")


const copyText = (e) =>{
    e.preventDefault();

    //highlight text within the textbox
    coupon.select();
    coupon.setSelectionRange(0,9999);

    
    // document.execCommand("copy"); DEPRECATED use Clipboard API
    navigator.clipboard.writeText(coupon.value).then(()=>{
        btn.textContent = "Copied!";

        setTimeout(()=>{
            btn.textContent = "Copy";
        },1500);
    })

};

btn.addEventListener("click",copyText);
