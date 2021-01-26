"use strict"
let body = document.getElementById("body");
let field = document.getElementById("field");
let ball = document.getElementById("ball");

body.onclick = function (event) {
    if (outLeft()) {
        ball.style.left = 0 + "px";
    }
    else if (outRight()) {
        ball.style.left = field.getBoundingClientRect().width - 2*field.clientLeft - (ball.getBoundingClientRect().width) + "px";
    }
    else {
        ball.style.left = event.clientX - field.getBoundingClientRect().x - field.clientLeft - (ball.getBoundingClientRect().width) / 2 + "px";
    }

    if (outTop()) {
        ball.style.top = 0 + "px";
    }
    else if (outBottom()) {
        ball.style.top = field.getBoundingClientRect().height - 2*field.clientTop - (ball.getBoundingClientRect().height) + "px";
    }
    else {
        ball.style.top = event.clientY - field.getBoundingClientRect().y - field.clientTop - (ball.getBoundingClientRect().height) / 2 + "px";
        }






function outLeft() {
    if (event.clientX < field.getBoundingClientRect().left + field.clientLeft + (ball.getBoundingClientRect().width) / 2)
        return true;
}
function outRight() {
    if (event.clientX > field.getBoundingClientRect().right - field.clientLeft - (ball.getBoundingClientRect().width) / 2)
        return true;
}
function outTop() {
    if (event.clientY < field.getBoundingClientRect().top + field.clientTop + (ball.getBoundingClientRect().height) / 2)
        return true;
}
function outBottom() {
    if (event.clientY > field.getBoundingClientRect().bottom - field.clientTop - (ball.getBoundingClientRect().height) / 2)
        return true;
}

};

