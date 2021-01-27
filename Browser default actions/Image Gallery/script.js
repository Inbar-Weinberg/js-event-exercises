"use strict"
let list = document.getElementById("thumbs");

list.addEventListener("click", changePicture);
function changePicture(event){
    let target = event.target.closest("a");
    if (!target){
        return false;
    }
    let largeImg=document.getElementById("largeImg")
    largeImg.src=target.href;
    largeImg.alt=target.title;
    event.preventDefault()
}