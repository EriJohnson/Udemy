let dobro = function (a) {
    return 2 * a
}

// transformando a função "dobro" em função arrow
dobro = (a) => {
    return 2 * a
}

// Uma forma mais reduzida de escrever uma função arrow (usado p/ funções de 1 única linha)
dobro = a => 2 * a // nesse caso o "return" já está implícito
console.log(dobro(Math.ceil(Math.PI))); // Passando o valor de PI como parâmetro e arredondando o seu valor p/ cima

// let ola = function () {
//     return 'Olá!'
// }

ola = () => 'Olá'

console.log(ola());



