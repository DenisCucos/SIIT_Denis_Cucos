let player = document.querySelector(".player")
document.addEventListener("keydown", function (event) {
    console.log(event)
    if (event.code === "ArrowDown") {
        let oldTop = parseInt(player.style.top)
        if (oldTop + 10 <= 380) {
            player.style.top = `${oldTop + 10}px`
        }
    }
    if (event.code === "ArrowRight") {
        let oldLeft = parseInt(player.style.left)
        if (oldLeft + 10 <= 380) {
            player.style.left = `${oldLeft + 10}px`
        }
    }
    if (event.code === "ArrowLeft") {
        let oldRight = parseInt(player.style.left)
        if (oldRight - 10 >= 0) {
            player.style.left = `${oldRight - 10}px`
        }
    }
    if (event.code === "ArrowUp") {
        let oldBot = parseInt(player.style.top)
        if (oldBot - 10 >= 0) {
            player.style.top = `${oldBot - 10}px`
        }
    }
}
);