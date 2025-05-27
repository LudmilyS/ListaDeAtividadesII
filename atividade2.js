const leia = require('readline-sync');

let nome, idade, doacao

nome = leia.question("Digite o nome do doador: ")

idade = leia.questionInt("Digite a idade do doador: ")

console.log('\nPrimeira doação = true \nJá doou anteriormente = false')
doacao = leia.question('\nPrimeira Doacao? ', 'Responda com true ou false\n')

if(idade >= 18 && idade <60){
    console.log(nome, "está apto para doar sangue")
} else if (idade >=60 && idade <= 69 && doacao === "false"){
    console.log(nome, "está apto para doar sangue")
} else if (idade >=60 && idade <= 69 && doacao === "true"){
    console.log(nome, "não está apto para doar sangue")
} else {
    console.log(nome, "não está apto para doar sangue!")
}