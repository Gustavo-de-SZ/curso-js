function produtosExemplo() {
  let nomeProd = prompt("digite seu nome");
  let valorProd = parseInt(prompt("digite o valor"));
  let quantiProd = parseInt(prompt("digite a quantidade"));
  let valorTotal;
  let indice = 0;
  while (indice < 5) {
    nomeProd, valorProd, quantiProd;

    indice = indice + quantiProd;
  }
  if ((indice = 5)) {
  }
}

function senhaCorreta() {
  let senhaUser = prompt("Digite sua senha");
  let senhaUser1 = "1234";
  if (senhaUser === senhaUser1) {
    alert("Senha correta");
  } else {
    alert("Senha incorreta");
  }
}

function promoDesconto() {
  let valorCompra = prompt("Digite o valor da compra");
  if (valorCompra > 100) {
    alert("voce ganhou um desconte de 10%");
  } else {
    alert("sem desconto disponivel");
  }
}

function classIdade() {
  let idade = prompt("Idade");
  if (idade < 13) {
    alert("criança");
  } else if (idade < 18) {
    alert("adolescente");
  } else if (idade < 60) {
    alert("adulto");
  } else if (idade >= 60) {
    alert("idoso");
  }
}

function qualMaior() {
  let num1 = prompt("Numero 1");
  let num2 = prompt("numero 2");

  if (num1 > num2) {
    alert(num1 + "é maior que " + num2);
  } else if (num2 > num1) {
    alert(num2 + "é maior que" + num1);
  } else if (num1 === num2) {
    alert("são iguais");
  }
}
function posNegNeu() {
  let numero = parseInt(prompt("numero"));

  if (numero === 0) {
    alert("neutro");
  } else if (numero > 0) {
    alert("positivo");
  } else if (numero < 0) {
    alert("negativo");
  }
}

function aprovRecupReprov() {
  let media = parseInt(prompt("média final"));

  if (media >= 7) {
    alert("aprovado");
  } else if (media >= 5 && media <= 6.9) {
    alert("recuperação");
  } else {
    alert("reprovado");
  }
}

function multiploTresCinco() {
  var numero = parseInt(prompt("digite numero inteiro"));
  if (numero % 3 === 0 && numero % 5 === 0) {
    alert("3 e 5");
  } else if (numero % 3 === 0) {
    alert(" 3");
  } else if (numero % 5 === 0) {
    alert(" 5");
  } else {
    alert("nenhum dos dois");
  }
}

function entradaPerm() {
  let idade = parseInt(prompt("digite sua idade"));
  let entrada = prompt("voce possui entrada?");

  if (idade >= 18 && entrada === "sim") {
    alert("entrada liberada");
  } else {
    alert("entrada negada");
  }
}
function bonusCompra() {
  var valor = parseFloat(prompt("valor compra"));
  var vip = prompt("vip?");
  if (valor > 200 && vip === "sim") {
    alert("brinde");
  } else {
    alert("sem brinde");
  }
}

function senhaUser() {
  var usuario = prompt("user");
  var senha = prompt("senha");
  if (usuario === "admin" && senha === "1234") {
    alert("login sucecido");
  } else {
    alert("user e senha invalidos");
  }
}

function triValido() {
  var lado1 = parseFloat(prompt("primeiro lado"));
  var lado2 = parseFloat(prompt("segundo lado"));
  var lado3 = parseFloat(prompt("terceiro lado"));
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    alert("triangulo valido");
  } else {
    alert("triangulo invalido");
  }
}

function anoBi() {
  var ano = parseInt(prompt("ano"));
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert("bi");
  } else {
    alert("nao bi");
  }
}

function numeroMuitaCoisa() {
  let numero = parseInt(prompt("numero"));
  if (numero % 2 === 0) {
    alert("o numero é par");
  } else if (numero === 0) {
    alert("o numero é neutro");
  } else if (numero !== 0) {
    alert("numero é impar");
  }
  if (numero > 0) {
    alert("positivo");
  } else if (numero < 0) {
    alert("negativo");
  }
  if (numero > 10) {
    alert("maior q 10");
  }
  if (numero <= 50) {
    alert("menor ou igual a 50");
  }
  if (numero < -10) {
    alert("menor que -10");
  }
  if (numero >= 30) {
    alert("maior ou igual a 30");
  }
  if (numero === 1) {
    alert("1");
  } else {
    alert("diferente de 1");
  }
}

function quadrado() {
  let num1 = parseInt(prompt("numero 1"));
  let num2 = parseInt(prompt("numero 2"));
  let num3 = parseInt(prompt("numero 3"));
  let num4 = parseInt(prompt("numero 4"));

  if (num1 === num2 && num2 === num3 && num3 === num4) {
    alert("é um quadrado");
  } else {
    alert("não é");
  }
}

function retangulo() {
  let num1 = parseInt(prompt("numero 1"));
  let num2 = parseInt(prompt("numero 2"));
  let num3 = parseInt(prompt("numero 3"));
  let num4 = parseInt(prompt("numero 4"));

  if (num1 === num2 || num1 === num3 || num1 === num4) {
  }
}

function crescente(num1, num2, num3) {
  // let num1 = parseInt(prompt("numero 1"))
  // let num2 = parseInt(prompt("numero 2"))
  // let num3 = parseInt(prompt("numero 3"))

  if (num1 > num2 && num2 > num3) {
    alert(num3 + ", " + num2 + ", " + num1);
  } else if (num1 > num2 && num2 < num3 && num3 < num1) {
    alert(num2 + ", " + num3 + ", " + num1);
  } else if (num1 < num2 && num2 > num3 && num1 > num3) {
    alert(num3 + ", " + num1 + ", " + num2);
  } else if (num1 < num2 && num2 < num3) {
    alert(num1 + ", " + num2 + ", " + num3);
  } else if (num1 > num2 && num2 < num3 && num3 > num1) {
    alert(num2 + ", " + num1 + ", " + num3);
  } else if (num1 < num2 && num2 > num3 && num1 < num3) {
    alert(num1 + ", " + num3 + ", " + num2);
  }
}

function mediaPonderada() {
  let nota1 = parseFloat(prompt("Digite a nota 1"));
  let nota2 = parseFloat(prompt("Digite a nota 2"));
  let nota3 = parseFloat(prompt("Digite a nota 3"));
  let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
debugger
  if (media >= 7) {
    alert("Aprovado " + media);
  } else if (media <= 6.99 && media >= 6.8) {
    let trabalho = prompt("Fez trabalho?");
    let mediaTrabalho = media + 0.2;
    if (trabalho === "sim") alert("Aprovado com trabalho " + mediaTrabalho);
  } else if (media < 7 && media >= 5) {
    let exame = parseFloat(prompt("Digite a nota do exame"));
    let mediaExame = (media + exame) / 2;
    if (mediaExame >= 6) {
      alert("Aprovado com exame " + mediaExame);
    } else if(mediaExame < 6){
      alert("Reprovado " + mediaExame);
    }
  }
}
