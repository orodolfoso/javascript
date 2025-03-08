/*

Tipos de dados Obejetos - Object


*/ 

const person = {
    name: 'Rodolfo',
    age: 30,
    address: {
        street: 'Zacarias Dias Côrtes',
        number: 46,
        zipcode: 25847,
        city: 'São Paulo',
        state: "Sp",
        country: 'Brasil'

    }
}

person.address.number = 520
person.name = 'Lucas'
person.age = 12

console.log(person)