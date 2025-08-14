function exercicio1() {
    var idade = parseInt(prompt("Digite sua idade:"));
    if (idade >= 18) {
        alert("Você é maior de idade");
    } else {
        alert("Você é menor de idade");
    }
}

function exercicio2() {
    var numero = parseInt(prompt("Digite um número inteiro:"));
    if (numero % 2 === 0) {
        alert("O número é par");
    } else {
        alert("O número é ímpar");
    }
}

function exercicio3() {
    var nota = parseFloat(prompt("Digite a nota da prova:"));
    if (nota >= 7) {
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
}

function exercicio4() {
    var senha = prompt("Digite a senha:");
    if (senha === "1234") {
        alert("Acesso permitido");
    } else {
        alert("Senha incorreta");
    }
}

function exercicio5() {
    var valor = parseFloat(prompt("Digite o valor da compra:"));
    if (valor > 100) {
        alert("Você ganhou um desconto de 10%");
    } else {
        alert("Sem desconto disponível");
    }
}

function exercicio6() {
    var idade = parseInt(prompt("Digite sua idade:"));
    if (idade <= 12) {
        alert("Criança");
    } else if (idade <= 17) {
        alert("Adolescente");
    } else if (idade <= 59) {
        alert("Adulto");
    } else {
        alert("Idoso");
    }
}

function exercicio7() {
    var n1 = parseFloat(prompt("Digite o primeiro número:"));
    var n2 = parseFloat(prompt("Digite o segundo número:"));
    if (n1 > n2) {
        alert("O maior número é " + n1);
    } else if (n2 > n1) {
        alert("O maior número é " + n2);
    } else {
        alert("Os números são iguais");
    }
}

function exercicio8() {
    var numero = parseFloat(prompt("Digite um número:"));
    if (numero > 0) {
        alert("Positivo");
    } else if (numero < 0) {
        alert("Negativo");
    } else {
        alert("Zero");
    }
}

function exercicio9() {
    var media = parseFloat(prompt("Digite a média final:"));
    if (media >= 7) {
        alert("Aprovado");
    } else if (media >= 5) {
        alert("Recuperação");
    } else {
        alert("Reprovado");
    }
}

function exercicio10() {
    var numero = parseInt(prompt("Digite um número inteiro:"));
    if (numero % 3 === 0 && numero % 5 === 0) {
        alert("Múltiplo de 3 e 5");
    } else if (numero % 3 === 0) {
        alert("Múltiplo de 3");
    } else if (numero % 5 === 0) {
        alert("Múltiplo de 5");
    } else {
        alert("Não é múltiplo de 3 nem de 5");
    }
}

function exercicio11() {
    var idade = parseInt(prompt("Digite sua idade:"));
    var ingresso = prompt("Você possui ingresso? (sim/não)");
    if (idade >= 18 && ingresso.toLowerCase() === "sim") {
        alert("Entrada permitida");
    } else {
        alert("Entrada negada");
    }
}

function exercicio12() {
    var valor = parseFloat(prompt("Digite o valor da compra:"));
    var vip = prompt("Você é cliente VIP? (sim/não)");
    if (valor > 200 || vip.toLowerCase() === "sim") {
        alert("Você ganhou um brinde!");
    } else {
        alert("Sem bônus disponível");
    }
}

function exercicio13() {
    var usuario = prompt("Digite o nome de usuário:");
    var senha = prompt("Digite a senha:");
    if (usuario === "admin" && senha === "1234") {
        alert("Login bem-sucedido");
    } else {
        alert("Usuário ou senha inválidos");
    }
}

function exercicio14() {
    var lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
    var lado2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
    var lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        alert("Triângulo válido");
    } else {
        alert("Triângulo inválido");
    }
}

function exercicio15() {
    var ano = parseInt(prompt("Digite um ano:"));
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        alert("Ano bissexto");
    } else {
        alert("Ano comum");
    }
}
