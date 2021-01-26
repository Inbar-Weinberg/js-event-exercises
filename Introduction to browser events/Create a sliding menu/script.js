"use strick"
let menu = document.getElementById("menu");
let menuSign = document.getElementById("icon");
menuSign.setAttribute("data-about","close");
menu.addEventListener("click", openMenu());

function openMenu() {
    let open = false;
    return function () {
        if (!open) {
            menuSign.setAttribute("data-about","open");
            menu.insertAdjacentHTML("beforeend",
                "<ul>"
                + "<li>Cake</li>"
                + "<li>Donut</li>"
                + "<li>Honey</li>"
                + "</ul>"
            )
        }
        else {
            let list = document.querySelector("ul");
            list.remove();
            menuSign.setAttribute("data-about","close");
        }
        open = !open;
    }
}
