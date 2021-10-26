let  btn_dark = document.querySelector(".btn_dark");
let bg_light = document.querySelector(".navbar");
btn_dark.onclick = function(){
    navbar.style.color = "red"

}


let myscroll = document.querySelector(".scroll");
window.onscroll = function () {
        if (scrollY >= 400) {
        myscroll.style.display = "block";
        myscroll.style.color = ''
    }
    else{
        myscroll.style.display = "none";
    }
}
myscroll.onclick = function() {
    scrollTo({
        left : 0 ,
        top : 0 ,
        behavior : "smooth"
    })
}

//// settings background home
let home = document.getElementById("home");
let btn =document.querySelector(".btn-dark");
let btn_download = document.querySelector(".btn_download");
btn.onclick = function() {
    document.body.classList.toggle("hhome");
    btn_download.style.background = "#ffde03";
    btn_download.style.color = "black";
    btn_download.style.border = "none"
}