let carros = [
    {
        "marca": "Toyota",
        "placa": "ABC-1234",
        "modelo": "Corolla",
        "data_emplacamento": "2020-05-15",
        "cor": "Preto"
    },
    {
        "marca": "Fiat",
        "placa": "XYZ-5678",
        "modelo": "Civic",
        "data_emplacamento": "2019-08-20",
        "cor": "Prata"
    },
    {
        "marca": "Chevrolet",
        "placa": "LMN-9123",
        "modelo": "Onix",
        "data_emplacamento": "2021-01-10",
        "cor": "Vermelho"
    },
    {
        "marca": "Ford",
        "placa": "GHI-4567",
        "modelo": "Fiesta",
        "data_emplacamento": "2018-06-25",
        "cor": "Azul"
    },
    {
        "marca": "Volkswagen",
        "placa": "JKL-8901",
        "modelo": "Golf",
        "data_emplacamento": "2022-11-12",
        "cor": "Branco"
    },
    {
        "marca": "BMW",
        "placa": "RST-2345",
        "modelo": "320i",
        "data_emplacamento": "2021-07-30",
        "cor": "Cinza"
    },
    {
        "marca": "Mercedes-Benz",
        "placa": "PQR-6789",
        "modelo": "A200",
        "data_emplacamento": "2023-03-05",
        "cor": "Prata"
    }
];

let marcas = carros.map(carro => carro.marca)

console.log(marcas)

let placasEModelos = carros.map(carro => {
    return {
        placa: carro.placa,
        modelo: carro.modelo
    };
});

console.log(placasEModelos);

let modelosFiat = carros.filter(carro => carro.marca === "Fiat").map(carro => carro.modelo);

console.log(modelosFiat);

let carrosAzuis = carros
    .filter(carro => carro.cor === "azul")
    .map(carro => ({
        marca: carro.marca,
        modelo: carro.modelo
    }));

console.log(carrosAzuis);

let carros2025 = carros
    .filter(carro => new Date(carro.data_emplacamento).getFullYear() === 2025);

console.log(carros2025);

// Lista inicial com 2 alunos (com todos os atributos)
let alunos = [
    {
        id: 1,
        nome: "Carlos",
        sobrenome: "Silva",
        numero_matricula: "2025001",
        turma: "Sup 05",
        notas: [7.5, 8.0, 6.5]
    },
    {
        id: 2,
        nome: "Mariana",
        sobrenome: "Oliveira",
        numero_matricula: "2025002",
        turma: "Sup 07",
        notas: [9.0, 8.5, 9.5]
    }
];


alunos.push({
    id: 3,
    nome: "Lucas",
    sobrenome: "Almeida",
    notas: []
});


alunos.push({
    id: 4,
    nome: "Fernanda",
    sobrenome: "Souza",
    numero_matricula: "2025003",
    turma: "Sup 06",
    notas: [8.5, 7.0, 8.0]
});

alunos.push({
    id: 5,
    nome: "João",
    sobrenome: "Pereira",
    numero_matricula: "2025004",
    notas: [6.5, 7.0, 7.5]
});


alunos.push({
    id: 6,
    nome: "Aline",
    sobrenome: "Costa",
    notas: [9.0, 8.5, 9.0]
});

let ids = alunos.map(aluno => aluno.id);
console.log("e) IDs:", ids);


let idsSup07 = alunos
    .filter(aluno => aluno.turma === "Sup 07")
    .map(aluno => aluno.id);
console.log("f) IDs da turma Sup 07:", idsSup07);


let nomesMenoresQue10 = alunos.filter(aluno => aluno.nome.length < 10);
console.log("g) Alunos com nome < 10 caracteres:", nomesMenoresQue10);


let numerosMatricula = alunos
    .filter(aluno => aluno.numero_matricula)
    .map(aluno => aluno.numero_matricula);
console.log("h) Números de matrícula:", numerosMatricula);


let semMatricula = alunos.filter(aluno => !aluno.numero_matricula);
console.log("i) Alunos sem número de matrícula:", semMatricula);

