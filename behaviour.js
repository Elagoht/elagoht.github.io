const menuswitch=document.getElementById("menuswitch")
const aside=document.getElementById("sidemenu")
let toggle=false

function menu() {
    aside.style.width=toggle?"4rem":"16rem"
    toggle=!toggle
    console.log(toggle)
}