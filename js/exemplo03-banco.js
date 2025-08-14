<<<<<<< HEAD
let saldo = 2000.00;

function sacar() {
    const valorSaque = parseFloat(
        prompt("Digite o valor do saque", "R$ ")
        .replace(",", ".")
        .replace("R$", "")
        .replaceAll(" ", "") 
    );

    if(valorSaque > saldo) {
        alert("Saldo insuficiente");
        } else {
            const confirmacao = confirm("Deseja realmente realizar o saque?")
            if (confirmacao === true) {
                saldo = saldo -valorSaque;
                apresentarSaldo()
    }
}
}
function apresentarSaldo(){
    alert("Saldo atual: R$" + saldo.toFixed(2).replace(".",","));
}
function depositar() {
    const valorDeposito = parseFloat(
        prompt("Digite o valor do depósito", "R$")
        .replace(",", ".")
        .replace("R$", "")
        .replaceAll(" ", "") 
    );
    if (valorDeposito <=0) {
        alert("Valor do depósito não pode ser menor ou igual a zero");
        depositar();
        }else {
            saldo = saldo + valorDeposito;
    }
}
=======
// escopo da variável saldo é global
let saldo = 2000.00;

function sacar() {
    // escopo da variável valorSaque é a função sacar
    const valorSaque = parseFloat(
        prompt("Digite o valor do saque", "R$ ")
            .replace(",", ".")
            .replace("R$", "")
            .replaceAll(" ", "")
    );

    if (valorSaque > saldo) {
        alert("Saldo insuficiente");
    } else {
        const confirmacao = confirm("Deseja realmente realizar o saque?");
        if (confirmacao === true) {
            saldo = saldo - valorSaque;
            apresentarSaldo();
        }
    }
}

function apresentarSaldo() {
    alert("Saldo atual: R$ " + saldo.toFixed(2).replace(".", ","));
}

function depositar() {
    const valorDeposito = parseFloat(
        prompt("Digite o valor do depósito", "R$ ")
            .replace(",", ".")
            .replace("R$", "")
            .replaceAll(" ", "")
    );

    if (valorDeposito <= 0) {
        alert("Valor do depósito não pode ser menor ou igual a R$ 0,00");
        depositar(); // recursão, método que chama ele mesmo
    } else {
        saldo = saldo + valorDeposito;
    }
}
>>>>>>> ab3a5ab0cbb2922fdee44238d9ed5b58a7bf883f
