"use strict"
let toolTipBox;
let body = document.body;

body.addEventListener("mouseover", addTooltip);
body.addEventListener("mouseout", removeTooltip);

function addTooltip(event) {
    let toolTipText = event.target.dataset.tooltip;
    if (!toolTipText) {
        return;
    }

    toolTipBox = document.createElement("div");
    toolTipBox.className = "tooltip";
    toolTipBox.append(toolTipText);
    body.append(toolTipBox);

    let location = event.target.getBoundingClientRect();
    let left = location.left + location.width / 2 - toolTipBox.clientWidth / 2 - toolTipBox.clientLeft;
    if (left < 0) {
        left = 0;
    }
    toolTipBox.style.left = left + "px";

    let top = location.top - toolTipBox.clientHeight - toolTipBox.clientTop - 5;
    if (top < 0) {
        top = location.bottom + toolTipBox.clientTop + 5;
    }
    toolTipBox.style.top = top + "px";
}

function removeTooltip(event) {
    if (toolTipBox) {
        toolTipBox.remove();
        toolTipBox = null;
    }
}
