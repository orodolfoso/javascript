let p = document.querySelector('p')
let input = document.querySelector('input');




const contacts = [
  { name: "Rodolfo", number: "(19) 97448-2321" },
  { name: "Lucas", number: "(11 98521-7413)" },
  { name: "Maria", number: "(12) 98755-1472" },
  { name: "Renata", number: "(99) 95231-7548" },
  {name: 'José', number: '(12) 94587-2315'}
];


function search() {
    for(let i = 0; i < contacts.length; i++ ) {

        if(input.value.toLocaleLowerCase() === contacts[i].name.toLocaleLowerCase()) {
            p.innerHTML = `Contato encontrado Nome: ${contacts[i].name} Tel: ${contacts[i].number}`

            break

        }else {
            p.innerHTML = "Contato não encontrado, tente novamente"
        }
    }

  
}
