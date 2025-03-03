/*

Estrutura de repetição - LOOP

   - FOR IN

*/

const users = {name: 'Rodolfo', age: 39, street: 'Brinco de ouro'}

// users.name -> Rodolfo
// users['name'] -> Rodolfo

for (const key in users) {
   console.log(` ${key} : ${users[key]}`)
}