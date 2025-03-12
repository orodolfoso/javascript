/*
document -> HTML

getElementById -> Trás um elemento pelo ID
getElementClassName -> Trás TODOS os elementos com essa classe
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

querySelector -> Trás UM elemento, o PRIMEIRO que encontar
querySelectorAll -> Trás TODOS os elementos que encontrar


*/

// const element = document.querySelector("img")

// console.log(element.src)

// element.src = "./dado1.png"

// const element = document.querySelector(".paragraph-js")

// element.value = 1985
// element.placeholder = "Uma nova mensagem"
// console.log(element)

// element.innerHTML = "Coloquei uma nova frase nestes paragrfos!"

// ALTERANDO TEXTOS E HTML NO JS

// element.innerHTML = "Cheguei <b>Brasil!</b>"
// console.log(element.innerContent) //SÓ HTML
// console.log(element.innerText) // LEVA EM CONTA O CSS
// console.log(element.innerHTML) // TRÁS TUDO - E PERMITE ADICIONAR HTML



// console.log(element)
// console.log(element)
// console.log(element)


// element.value = 2013   
// console.log(element.value)


// ALTERANDO CSS(estilos) NO JS


const button = document.querySelector("h1")

button.style.fontFamily= "Arial"
button.style.fontSize= "80px"