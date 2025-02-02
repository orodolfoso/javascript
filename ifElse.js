// Condicionais IF e ESLE

const notaDoAluno = 10
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte) {
    console.log('Parabéns, você foi aprovado! :)')
} 

if (notaDoAluno < notaDeCorte) {
    console.log('Você foi reprovado :(')
}


const senhaDoUsuario = 123456
const senhaDigitada = 123456

if(senhaDoUsuario == senhaDigitada) {
    console.log('Seja bem-vindo, você está logado (a)!')
}else {
    console.log('Senha ou usuario incorretos')
}