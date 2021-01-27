"use strict"
let contents = document.getElementById("contents");
contents.addEventListener("click",verifyLeave);

function verifyLeave(event){
    let target = event.target.closest("a");
    if (target && contents.contains(target)){
        let agree = confirm("Do you want to leave for " + target.getAttribute("href"));
        if (!agree){
            event.preventDefault();
        }
    }
}
    

