let body = document.getElementsByTagName("body")[0];
let ol = document.getElementsByTagName("ol")[0];
ol.id = "lista-de-tarefas";

function criarTitulo() {
    let h1 = document.createElement("h1");
    h1.innerText = "Minhas Tarefas do Curso SuperDev";
    h1.classList.add("titulo");
    body.appendChild(h1);
}

function criarParagrafo() {
    let p = document.createElement("p");
    p.innerText = "texto text";
    p.classList.add("p");
    body.appendChild(p);
}

function criarListaOrdenada() {
    body.appendChild(ol);
}

function campo() {
   
    let input = document.createElement("input");
    input.id = "tarefa";
    input.setAttribute("type", "text");

    let label = document.createElement("label");
    label.setAttribute("for", "tarefa");
    label.innerText = "Tarefa";
  
    let inputData = document.createElement("input");
    inputData.id = "data-planejada";
    inputData.setAttribute("type", "date");

    let labelData = document.createElement("label");
    labelData.setAttribute("for", "data-planejada");
    labelData.innerText = "Data planejada";

    body.appendChild(label);
    body.appendChild(input);
    body.appendChild(labelData);
    body.appendChild(inputData);
}


function criarItemNaOl(nome, data) {
    let li = document.createElement("li");
    if (data) {
        li.innerText = `${nome} (Planejado para: ${data})`;
    } else {
        li.innerText = nome;
    }
    ol.appendChild(li);
}


function cadastrar() {
    let input = document.getElementById("tarefa");
    let dataInput = document.getElementById("data-planejada");

    let nome = input.value;
    let data = dataInput.value;

    if (nome.trim() !== "") {
        criarItemNaOl(nome, data);
        input.value = "";
        dataInput.value = "";
    }
}


function criarBotaoCadastrar() {
    let botao = document.createElement("button");
    botao.setAttribute("type", "button");
    botao.innerText = "Cadastrar";


    body.appendChild(botao);


    botao.addEventListener("click", cadastrar);
}


criarTitulo();
criarParagrafo();
criarListaOrdenada();
campo();
criarBotaoCadastrar();
