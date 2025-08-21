function precos() {
    let indice = 0;
    let soma = 0;

    while (indice < 4) {
        let entrada = prompt("Digite o preço:");
        
    
        entrada = entrada.replace(",", ".");
        
        let preco = parseFloat(entrada);

        if (!isNaN(preco)) {
            soma += preco;
            indice++;
        } else {
            alert("Preço inválido. Tente novamente.");
        }
    }

    let media = soma / 4;

    alert("Total da compra: R$ " + soma.toFixed(2));
    alert("Média dos preços: R$ " + media.toFixed(2));
}

function inicial(){
    let indice = 0;
    let palavrasA = 0;
    let palavrasB = 0;

    while(indice < 5){
    
        let palavra = prompt("digite palavra");
        palavra = palavra.toLowerCase().trim();

        if(palavra.startsWith("a")){
            palavrasA = palavrasA + 1;
        }
        else{
            palavrasB = palavrasB + 1;
        }
        indice = indice + 1;
    }
    alert("começam com a" + palavrasA + 
    "\ncomeçam com outro" + palavrasB);
}

function idades(){

    let indice = 0;

    while(indice > 1){

        let idade1 = parseint(prompt("idade"));
        if(idade1  < 1 || idade1 > 120){
            alert("tente novamente")
        }
        
        if(idade1 > 1 || idade < 120){
            alert("idade cadastrada" + idade1);
           
        }
        }
        indice = indice + 1
}

function altura3(){
    let maiorAltura =0;
    let indice = 0;

    while(indice < 3){
        let altura = parseFloat(prompt("altura")).toFixed(2)
      
        if(altura > maiorAltura){
        maiorAltura = altura
    }
        indice = indice +1;
    }
    alert("maior altura" + maiorAltura)
}

function menuMini(){
    let opcaoEscolhida =0;

    while(opcaoEscolhida != 100){
        opcaoEscolhida = parseint(prompt("opcao"))

        if(opcaoEscolhida = 1){
            alert("saudacoes")
        }
         if(opcaoEscolhida =2){
           let numero = parseFloat(prompt(""))
        }
    }
}

function parImpar(){
 
}

