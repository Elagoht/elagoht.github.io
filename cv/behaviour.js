let toggle=false
let hamburger=document.getElementById("hamburger")
let leftside=document.getElementById("leftside")
toggleMenu=function() {
    leftside.style.width=toggle?"0":"250px"
    leftside.style.minWidth=toggle?"0":"250px"
    leftside.style.zIndex=toggle?-1:2
    toggle=!toggle
}
toggleSide=function() {
    if (window.innerWidth<=720) {
        toggle=true
        toggleMenu()
    }
}
let width=window.innerWidth;
window.onresize=(event)=>{
    if (window.innerWidth!=width) {
        if (window.innerWidth>720) {toggle=false}
        else {toggle=true}
        toggleMenu()
    }
}