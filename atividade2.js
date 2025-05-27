const leia = require('readline-sync');

let nome, idade, doacao

nome = leia.question("Digite o nome do doador: ")

idade = leia.questionInt("Digite a idade do doador: ")

doacao = leia.keyInYNStrict("Primeira doacao: ", "Responda apenas com Y ou N")

if(idade >= 18 && idade <60){
    console.log(nome, "está apto para doar sangue")
} else if (idade >=60 && idade <= 69 && doacao === "Y"){
    console.log(nome, "está apto para doar sangue")
} else if (idade >=60 && idade <= 69 && doacao === "N"){
    console.log(nome, "não está apto para doar sangue")
} else {
    console.log(nome, "não está apto para doar sangue")
}