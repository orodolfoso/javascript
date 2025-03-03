/*

ForEach (item, index, array)

*/

const users = [
    { name: 'Rodolfo', age: 39, contact: '(19) 97448-2321'},
    { name: 'Lucas', age: 11, contact: '(11 98521-7413)' },
    { name: 'Maria', age: 60, contact: '(12) 98755-1472'},
    { name: 'Renata', age: 72, contact: '(99) 95231-7548' },
    {name: 'José', age: 68, contact: '(12) 94587-2315'}
]



users.forEach(function (item, index, array)  {
    console.log(`${index + 1} Nome: ${item.name}, Idade:  ${item.age}, Contato: ${item.contact}`)
   
});
