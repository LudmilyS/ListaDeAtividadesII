const leia = require('readline-sync');

let produto, quantidade, preco, valortotal

console.log('***** Escolha seu produto *****')
console.log('1 - cachorro quente')
console.log('2 - X- Salada')
console.log('3 - X- Bacon')
console.log('4 - Bauru')
console.log('5 - Refrigerante')
console.log('6 - Suco de Laranja')

produto = leia.questionFloat("\nQual o Produto? ", "Escolha um numero de 1 a 6")
quantidade = leia.questionInt("Digite a quantidade: ")

switch(produto){
    case 1:
        preco = 10
        valortotal = preco*quantidade
        console.log("Produto: Cachorro Quente \nValor total: ", 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valortotal))
        break
    case 2:
        preco = 15
        valortotal = preco*quantidade
        console.log("Produto: X - Salada \nValor total: ", 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valortotal))
        break
    case 3:
        preco = 18
        valortotal = preco*quantidade
        console.log("Produto: X - Bacon \nValor total: ", 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valortotal))
        break
    case 4:
        preco = 12
        valortotal = preco*quantidade
        console.log("Produto: Bauru \nValor total: ", 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valortotal))
        break
    case 5:
        preco = 8
        valortotal = preco*quantidade
        console.log("Produto: Refrigerante \nValor total: ", 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valortotal))
        break
    case 6:
        preco = 13
        valortotal = preco*quantidade
        console.log("Produto: Suco de Laranja\nValor total: ", 
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            }).format(valortotal))
        break
}

console.log("\nObrigada Pela Preferencia!")