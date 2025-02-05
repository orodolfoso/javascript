// AddEventListener

const input = document.querySelector("#main-input")
const select = document.querySelector("select")
const button = document.querySelector(".main-button")

function troqueiValor () {
    console.log("Troquei o valor")
}

select.addEventListener("click", troqueiValor) 