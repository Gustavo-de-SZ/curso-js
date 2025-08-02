
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