

let number = 0
let cron
let h1 = document.querySelector('h1')



function start() {
    cron = setInterval(function(){
        number++
        h1.innerHTML = number
    }, 1000)
}

function stop() {
    clearInterval(cron)
}

// setInterval(() => {
//     console.log(number++)
// }, 1000);

/*
    
setTimeout -> Executa uma vez
setInterval -> Executa infinitas vezes 
clearInterval -> Vai pausar o setInterval   
      
*/


// setTimeout(() => {
//     // Executa o que estiver aqui
// }, timeout);



// function myFunction() {
//     // Executa o que estiver aqui
// }
// setTimeout(myFunction, timeout);

// setTimeout(function() {
//     alert("Executei")
// }, 3000);  // 1000 milisegundos = 1 segundo

