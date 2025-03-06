/*

Functions / Funções

    Funçaõ void(vazia), não retorna nada.
    Função return, retorNa um valor para quem chamou a funçãO.

*/

// function sum(value, value2) { // void
//     console.log(value + value2)
// }

// function sum(value, value2) { 
//    const result = value + value2
//    return result
// }

// console.log (sum(10, 20))

/*

Calculadora Desconto:
Todos os produtos ecima de R$ 30,00 tem 10% de desconto

*/

const cart = [250, 30, 10, 2, 85, 99, 452]
let finalValue = 0

/*

R$ 250,00 // 7% -> 17,50

250 * 7 -> 1750 / 100

*/

function calculateDiscount (price, discount) {
    const result = (price * discount) / 100
    return result
}



cart.forEach(value => {

    if(value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValue = finalValue + (value - discount)
    }else {
        finalValue += value
    }
   
});

console.log(finalValue)