const bigNumber = document.getElementById("big-number")
const eventKey = document.getElementById("event-key")
const which = document.getElementById("which")
const keycode = document.getElementById("keycode")

document.addEventListener("keydown", (event) => {
    bigNumber.innerHTML = event.key
    eventKey.innerHTML = event.key
    which.innerHTML = event.which
    keycode.innerHTML = event.keyCode
})