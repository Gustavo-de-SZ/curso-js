
function apresentarMensagemConsole(){
console.log("Hello World");
}

function apresentarMensagemUsuario(){
    alert("Minha primeira mensagem em JS para o usuário");
}

//<button onlick="exemploVariaviesInteiras()">Somar inteiros fixos<;/button>
//padrão de nomenclatura de funções em JS camelCasa
function apresentarMensagemSoma(){
let numero1 = 7; // tipo inteiro
let numero2 =24; // tipo inteiro
let soma = numero1 + numero2;
alert("Soma: " + soma);
}

function exempolVariaveisString(){
    let nome ="john";
    let nomeComposto ="Thiago";
    let sobrenome = "doe";
    let nomeCompleto = nome + " " + nomeComposto +" " + sobrenome;
    alert("Nome Completo:" +nomeCompleto);

}
function exemplVariaveisFloat(){
    let precoAbacaxi = 12.39;
    let precoSwitch2 = 4500.00;

    let total = precoAbacaxi + precoSwitch2;
    alert("Total:" + total);
}

function exemploMercado(){
    let produto1Nome = "cerveja";
    let produto1Quantidade = "12";
    let produto1Preco ="5.30";
    let Produto1Total = produto1Quantidade * produto1Preco;

    let produto2Nome ="Amemdoim";
    let produto2Quantidade = "2";
    let produto2Preco = "8.00";
    let produto2Total = produto2Quantidade * produto2Preco;

    let totalCompra = Produto1Total + produto2Total;

    alert(
        "Produto 1: " + produto1Nome +
        "\nQuantidade: " + produto1Quantidade +
        "\nPreço Unitario: " + produto1Preco +
        "\nValor: "  + Produto1Total + 
        "\n\nProduto 2: " + produto2Nome + 
        "\nQuantidade: " + produto2Quantidade +
        "\nPreço unitario: " + produto2Preco +
        "\nValor: " + produto2Total +
        "\n\ntotal: " + totalCompra 
    )

}
function exercicio01() {
    console.log("SuperDev 7ª Edição");
}
function exercicio02() {
    let nome = prompt("Digite seu nome:");
    let idade = parseInt(prompt("Digite sua idade:"));
    let peso = parseFloat(prompt("Digite seu peso (kg):"));
    let altura = parseFloat(prompt("Digite sua altura (m):"));

    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("Peso:", peso);
    console.log("Altura:", altura);
}
function exercicio03() {
    let personagem1 = { nome: "Yone", raca: "Humano", skill: "Destino Selado", pais: "Ionia", rota: "Top" };
    let personagem2 = { nome: "Ahri", raca: "Vastaya", skill: "Charme", pais: "Ionia", rota: "Mid" };
    let personagem3 = { nome: "Garen", raca: "Humano", skill: "Grito do Demacian", pais: "Demacia", rota: "Top" };

    console.log(personagem1, personagem2, personagem3);
}
function exercicio04() {
    let nome = prompt("Digite o nome do paciente:");
    let peso = parseFloat(prompt("Digite o peso (kg):"));
    let altura = parseFloat(prompt("Digite a altura (m):"));

    let imc = peso / (altura * altura);
    console.log(`${nome} tem IMC de ${imc.toFixed(2)}`);
}
function exercicio05() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    console.log("Soma:", numero1 + numero2);
    console.log("Subtração:", numero1 - numero2);
    console.log("Multiplicação:", numero1 * numero2);
    console.log("Divisão:", numero2 !== 0 ? numero1 / numero2 : "Divisão por zero não permitida");
}
function exercicio06() {
    function criarPeca(nomePeca) {
        let modelo = prompt(`Digite o modelo da ${nomePeca}:`);
        let preco = parseFloat(prompt(`Digite o preço da ${nomePeca}:`));
        return { modelo, preco };
    }

    let placaMae = criarPeca("Placa Mãe");
    let placaVideo = criarPeca("Placa de Vídeo");
    let processador = criarPeca("Processador");
    let memoria = criarPeca("Memória RAM");
    let fonte = criarPeca("Fonte");

    let total = placaMae.preco + placaVideo.preco + processador.preco + memoria.preco + fonte.preco;

    console.log("Peças do Computador:");
    console.log(placaMae, placaVideo, processador, memoria, fonte);
    console.log("Total: R$" + total.toFixed(2));
}
function exercicio07(nota) {
    if (nota >= 7) {
        console.log("Aprovado!");
    } else if (nota >= 5) {
        console.log("Recuperação.");
    } else {
        console.log("Reprovado.");
    }
}
function exercicio08() {
    let contador = 0;
    while (contador < 5) {
        console.log("Contador:", contador);
        contador++;
    }
}
function exercicio09() {
    let frutas = ["Maçã", "Banana", "Laranja", "Pêssego"];
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}
function exercicio10() {
    for (let i = 1; i <= 10; i++) {
        console.log("Número:", i);
    }
}
