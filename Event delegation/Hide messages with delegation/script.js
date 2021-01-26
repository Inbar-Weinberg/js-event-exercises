"use strict"
let container = document.getElementById("container");
container.addEventListener("click", function(event){
    if (event.target.className === "exit"){
        let tab = event.target.closest(".tab");
        tab.remove();
    }
    else return;
});

