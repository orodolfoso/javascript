/*

Estrutura de repetição - LOOP

- FOR

1) INICIALIZAÇÂO - Criar uma variável e colocsr um valor inicial para ela
2) CONDIÇÂO - Enquanto for true, o laçoi continuará iterando.
                Ele irá verificar antes de cada iteração
3) EXPRESSÂO FINAL - O quie irá ocorrer a cada  vez que o nosso laço der uma volta             


for ([Inicialização]; [condição]; [expressão final]) {
    Seu código aqui
}

*/

// for (let i = 0; i < 15; i++) {
//     console.log(i)
// }

// for (let i = 20; i > 2; i--) {
//     console.log(i)
// }

const users = [
  "Maria",
  "João",
  "José",
  "Pedro"
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}
