let Clicker = document.getElementById("icon")
let Elm = document.getElementById("Content")
document.addEventListener("click",function(e){
if(e.target===Clicker){
    Elm.style.display = "block"
}else {
    Elm.style.display = "none"

}
})
let Date_Space = document.querySelector(".FooterDiv h5 span:first-child");
let date = new Date().getFullYear();
Date_Space.innerHTML=date;
