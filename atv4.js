const leia = require('readline-sync');

let saldo, saque, deposito, operacao, novoSaldo
saldo = 1000

console.log("Escolha uma das opções abaixo: ")
console.log("1 - Saldo \n2 - Saque \n3 - Deposito")

operacao = leia.questionFloat('\nQual Operacao voce deseja? ')

switch(operacao){
    case 1:
        console.log("\nSeu saldo é de: ", 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(saldo))
            break
    case 2:
        saque = leia.questionFloat('\nQual valor a ser sacado? ')
        novoSaldo = saldo-saque 
        if (novoSaldo>0){
            console.log('Seu novo saldo é de: ', 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSaldo))
        }else {
            console.log("Saldo Insuficiente!")
        } break
    case 3: 
        deposito = leia.questionFloat('\nQual valor a ser depositado? ')
        novoSaldo = saldo + deposito
        console.log('\nSeu novo saldo é de: ',
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(novoSaldo))
        break
    case 4:
        console.log('\nOperação Inválida!')
        break
}
