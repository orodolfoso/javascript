/*

Operador Ternário

? if (se)
: else (se não)
&& (if sem else)


*/

const salary = 2000

// if(salary < 3000) {
//     console.log("O colaborador é junior")
// }else if(salary >= 3000 && salary < 10000) {
//     console.log("Ele é senior")
// }else {
//     console.log("Ele é diretor")
// }

// IF ELSE -> salary < 3000 ? console.log("O colaborador é junior") : console.log("Ele é senior")
// IF SEM ELSE salary < 3000 && console.log("O colaborador é junior") 

// ELSE IF
salary < 3000 ?  console.log("O colaborador é junior") : salary >= 3000 && salary < 10000 ?  console.log("Ele é senior") : console.log("Ele é diretor")

