"use strict"
let list = document.getElementById("ul");
list.addEventListener("click", highlight);

function highlight(event) {
    let target = event.target.closest("li");
    if (!target) {
        return;
    }
    if (event.ctrlKey || event.metaKey) {
        highlightMany();
    }
    else {
        highlightOne();
    }
    function highlightMany() {
        target.className = "selected";
    }

    function highlightOne() {
        let selected = document.getElementsByClassName("selected");
        while (selected[0]) {
            selected[0].classList.remove("selected");
        }
        target.className = "selected";
    }
}
