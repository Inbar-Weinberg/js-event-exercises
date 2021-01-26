"use strict"
let buttons = document.querySelectorAll(".exit");
for (let button of buttons){
    button.addEventListener("click",()=>{button.parentElement.remove()});
}
