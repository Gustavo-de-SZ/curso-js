// 1
function exercicio1() {
    let frase = prompt("Digite uma frase:");
    let palavraAntiga = prompt("Qual palavra deseja trocar?");
    let palavraNova = prompt("Qual será a nova palavra?");
    let novaFrase = frase.replace(palavraAntiga, palavraNova);
    console.log("Frase modificada: " + novaFrase);
}

// 2
function exercicio2() {
    let frase = prompt("Digite uma frase:");
    let palavraRemover = prompt("Qual palavra deseja remover?");
    let novaFrase = frase.replaceAll(palavraRemover, "");
    console.log("Frase sem a palavra: " + novaFrase);
}

// 3
function exercicio3() {
    let nomeCompleto = prompt("Digite seu nome completo:");
    let partes = nomeCompleto.split(" ");
    let primeiro = partes[0];
    let ultimo = partes[partes.length - 1];
    console.log("Primeiro nome: " + primeiro);
    console.log("Último nome: " + ultimo);
}

// 4
function exercicio4() {
    let frase = prompt("Digite uma frase:");
    let parte = frase.substring(5, 15); // exemplo: pega do índice 5 até 15
    console.log("Parte da frase: " + parte);
}

// 5
function exercicio5() {
    let texto = prompt("Digite um texto com espaços no início e no fim:");
    let resultado = texto.trim();
    console.log("Sem espaços extras: " + resultado);
}

// 6
function exercicio6() {
    let texto = prompt("Digite um texto com espaços antes da primeira palavra:");
    let resultado = texto.trimStart();
    console.log("Sem espaços no início: " + resultado);
}

// 7
function exercicio7() {
    let texto = prompt("Digite um texto com espaços no final:");
    let resultado = texto.trimEnd();
    console.log("Sem espaços no final: " + resultado);
}

// 8
function exercicio8() {
    let telefone = prompt("Digite seu número de telefone sem DDD:");
    let telefoneCompleto = telefone.padStart(11, "0"); // exemplo: usa "0" até completar 11 dígitos
    console.log("Telefone com DDD/zeros: " + telefoneCompleto);
}

// 9
function exercicio9() {
    let conta = prompt("Digite o número da conta bancária:");
    let contaFormatada = conta.padEnd(10, "0");
    console.log("Conta formatada: " + contaFormatada);
}

// 10
function exercicio10() {
    let valor = parseFloat(prompt("Digite um valor decimal:"));
    console.log("R$ " + valor.toFixed(2).replace(".", ","));
}


/*function executarTodos() {
    exercicio1();
    exercicio2();
    exercicio3();
    exercicio4();
    exercicio5();
    exercicio6();
    exercicio7();
    exercicio8();
    exercicio9();
    exercicio10();
    }*/
