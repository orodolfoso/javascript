// Tipos de dados Obejetos - Object

const rodolfo = {
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

rodolfo.address.number = 520
rodolfo.name = 'Lucas'
rodolfo.age = 12

console.log(rodolfo)