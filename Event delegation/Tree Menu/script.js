"use strict"
let listItem = document.querySelectorAll("li");
for (let item of listItem) {
    let content = item.firstChild;
    let span = document.createElement("span");
    item.prepend(span);
    span.prepend(content);
}

let tree = document.getElementById("tree");
tree.addEventListener("click", function (event) {
    if (event.target.tagName != "SPAN") {
        return;
    }
    let levelContainer = event.target.parentNode.querySelector("ul");
    if (!levelContainer) {
        return;
    }
    levelContainer.hidden = !levelContainer.hidden;
});
