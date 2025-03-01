/* 

Operadores Lógicos

&& -> E -> Pessoa exigente / Pessoa obediente

true && true = true
true && false = false
false && false = false

|| -> Ou Tanto faz
    true || true = true 
    true || false = true
    false || false = false

! -> Negação
    !true = false
    !false = true

*/

// console.log(true && false && true)
// console.log(!false)


const digitarASenha = true
const digitarOToken = false
const numeroDaConta = true


// if(digitarASenha || digitarOToken || numeroDaConta) {
//     console.log("Logado com sucesso!")
// }else {
//     console.log("Autenticação FALHOU!")
// }

// if(digitarASenha && digitarOToken && numeroDaConta) {
//     console.log("Logado com sucesso!")
// }else {
//     console.log("Autenticação FALHOU!")
// }

if(!(digitarASenha && digitarOToken && numeroDaConta)) {
    console.log("Logado com sucesso!")
}else {
    console.log("Autenticação FALHOU!")
}