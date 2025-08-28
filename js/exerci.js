function csv() {
  let indice = 0;
  while (indice < 3) {
    let linha = prompt("nome|idade|salario");
    let split = linha.split("|");

    let nome = split[0];
    let idade = parseInt(partes[1]);
    let salario = parseFloat(partes[2]);
    alert(nome + "|" + idade + "|" + salario);
  }
}

function datas() {
  let indice = 0;
  let marco = 0;
  let dezembro = 0;
  let maisRecente = 0
  let maisAntigo = 99999999999;
  while (indice < 5) {
    let data = prompt("dd/mm/aaaa");
    let split = data.split("/");
    let dia = split[0];
    let mes = split[1];
    let ano = split[2];
    let chave = parseint(dia + mes + ano);

    if (mes === 3) {
      marco = marco + 1;
    }
    if (mes === 12) {
      dezembro = dezembro + 1;
    }

  }
}

function telefone(){
    
}