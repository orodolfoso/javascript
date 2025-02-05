const element = document.querySelector("#main-input")


element.value = 123456
console.log(element.value)


const element = document.querySelector("img")


console.log(element.src)

const element = document.querySelector(".main-button")

element.innerHTML = " "

console.log(element.textContent) //SÓ HTML
console.log(element.innerText) // LEVA EM CONTA O CSS
console.log(element.innerHTML) // TRÁS TUDO - E PERMITE ADICIONAR HTML


// Aletração em CSS
const button = document.querySelector("h1")

button.style.fontSize = "50px"