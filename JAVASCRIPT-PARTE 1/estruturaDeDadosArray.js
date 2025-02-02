// Estruturas de dados Array

const user = [
 {
    name: 'Rodolfo',
    age: 39,
    nacinality: 'Brasileiro',
    profession: 'Programador'
 },

 {
    name: 'Carlos',
    age: 56,
    nacinality: 'Argentino',
    profession: 'Medico'
 }

]

console.log(user[1].name)
user[0].name = 'José'
user[1].name = 'Bruno'
console.log(user[0], user[1])

