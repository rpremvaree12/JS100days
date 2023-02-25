const colorCode = document.querySelector(".hexcode")
const btn = document.querySelector(".generate")

const randomHexCode = ()=> {
    let color = Math.random().toString(16).substring(2,8);
    colorCode.innerHTML = "#"+color;
    document.querySelector("body").style.backgroundColor = color;
}
// toString with parameter generates with base 16 / hex

btn.addEventListener("click", randomHexCode);

randomHexCode();