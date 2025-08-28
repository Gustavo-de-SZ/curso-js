function jogadores() {
  let indice = 0;
  let menorPeso = 9999999999;
  let maiorAltura = 0;
  let maiorNome = "a";
  let quantidadeFeminino = 0;
  let quantidadeMasculino = 0;
  let maiorCartoesAmarelos = 0;
  let maiorCartoesVermelhos = 0;
  let menorNome = 99999999999;
  let nomeMenorCartoesAmarelos = "";
  let nomeMenorCartoesVermelhos = 99999999;
  let menorCartoesAmarelos = 999999;
  let menorCartoesVermelhos = 9999999999;
  let maiorPeso = 0;
  let nomeMenorPeso = "";
  let nomeMaiorAltura = "";
  let nomeMaiorNome = "";
  let nomeMenorNome = "";
  let nomeMaiorPeso = "";
  let nomeMaiorVermelho = 0;
  let nomeMaiorAmarelo = "";
  let nomeMenorVermelho = "";
  while (indice < 2) {
    let nome = prompt("nome");
    let idade = parseInt(prompt("idade"));
    let peso = parseFloat(prompt("peso"));
    let sexo = prompt("sexo");
    let altura = parseFloat(prompt("altura"));
    let quantidadeGolsMarcados = parseInt(prompt("gols marcados"));
    let cartoesAmarelosRecebidos = parseInt(prompt("amarelos recebidos"));
     let cartoesVermelhoRecebidos = parseInt(prompt("vermelhos recebidos"));

    if (peso < menorPeso) {
      menorPeso = peso;
      nomeMenorPeso = nome;
    }

    if (altura > maiorAltura) {
      maiorAltura = altura;
      nomeMaiorAltura = nome;
    }

    if (nome.length > maiorNome.length) {
      maiorNome = nome;
      nomeMaiorNome = nome;
    }

    if (sexo === "F" || sexo === "feminino") {
      quantidadeFeminino = quantidadeFeminino + 1;
    }
    if (sexo === "M" || sexo === "masculino") {
      quantidadeMasculino = quantidadeMasculino + 1;
    }
    if (menorCartoesAmarelos > cartoesAmarelosRecebidos) {
     menorCartoesAmarelos = cartoesAmarelosRecebidos;
      nomeMenorCartoesAmarelos = nome;
    }
    if (nome.length < menorNome.length) {
      menorNome = nome;
      nomeMenorNome = nome;
    }
    if (peso > maiorPeso) {
        maiorPeso = peso;
        nomeMaiorPeso = nome;
      }

    if (maiorCartoesVermelhos < cartoesVermelhoRecebidos) {
           maiorCartoesVermelhos = cartoesVermelhoRecebidos;
           nomeMaiorVermelho = nome;
    }
    if (maiorCartoesAmarelos < cartoesAmarelosRecebidos) {
          maiorCartoesAmarelos = cartoesAmarelosRecebidos;
           nomeMaiorAmarelo = nome;
    

if (nomeMenorCartoesVermelhos > cartoesVermelhoRecebidos) {
     menorCartoesVermelhos = cartoesVermelhoRecebidos;
      nomeMenorCartoesVermelhos = nome;
  }
  indice = indice + 1;
  }
 

}

alert(
    "🏆 Estatísticas dos Jogadores:\n\n" +
    "👤 Jogador com MENOR peso: " + nomeMenorPeso + " (" + menorPeso + "kg)\n" +
    "👤 Jogador com MAIOR peso: " + nomeMaiorPeso + " (" + maiorPeso + "kg)\n" +
    "📏 Jogador mais ALTO: " + nomeMaiorAltura + " (" + maiorAltura + "m)\n" +
    "🔠 Nome MAIS LONGO: " + nomeMaiorNome + " (" + maiorNome.length + " letras)\n" +
    "🔡 Nome MAIS CURTO: " + nomeMenorNome + " (" + menorNome.Length + " letras)\n" +
    "♀️ Jogadoras (F): " + quantidadeFeminino + "\n" +
    "♂️ Jogadores (M): " + quantidadeMasculino + "\n" +
    "🟨 Menor cartões AMARELOS: " + nomeMenorCartoesAmarelos + " (" + menorCartoesAmarelos + ")\n" +
    "🟨 Maior cartões AMARELOS: " + nomeMaiorAmarelo + " (" + maiorCartoesAmarelos + ")\n" +
    "🟥 Menor cartões VERMELHOS: " + nomeMenorCartoesVermelhos + " (" + menorCartoesVermelhos + ")\n" +
    "🟥 Maior cartões VERMELHOS: " + nomeMaiorVermelho + " (" + maiorCartoesVermelhos + ")"
  );
}
