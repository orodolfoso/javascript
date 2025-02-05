// getElementById - para id

const input = document.getElementById("main-input")

console.log(input)

// getElementByClassName - para classes

const elements = document.getElementsByClassName("paragraph-js")

console.log(elements)

// getElementByTagName - para Tags

const paragraph = document.getElementsByTagName("p")

console.log(paragraph)

// document.getElementsByName - Trás todos os elementos com  esse NAME

const names = document.getElementsByName("nome-completo")

console.log(names)

// querySelector - Trás um elemento, o PRIMEIRO que encontrar

const first = document.querySelector("button.main-button")

console.log(first)

// querySelectorAll - Trás todos os elementos que encontar

const all = document.querySelectorAll("p")



console.log(all)

const element = document.querySelector("main-input")

console.log(element.placeholder)
