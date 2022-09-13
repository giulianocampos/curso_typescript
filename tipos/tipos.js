"use strict";
//string
//os tipos são inferidos no momento da atribuição
let nome = 'João';
console.log(nome);
//nome = 20
let veiculo = '1.0 TSI UP';
console.log(veiculo);
//numbers
let idade = 27;
//idade = 'Ana'
console.log(idade);
//boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explícitos
/*caso você não inicialize e nem atribua um valor para a variável,
ela será tratada como do tipo any */
let minhaIdade;
minhaIdade = 20;
console.log(minhaIdade);
console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
//praticando array
let introduce = ['Giuliano', 'Dolores', 'Isac Newton'];
console.log(introduce);
let numeros = [20, 30, 40, 50, 60];
console.log(numeros);
let variados = ['teste 1', 10, 'teste 2', 20];
console.log(variados);
let praticando = ['Campos', 'Silva', 'Omoto'];
console.log(praticando);
//tuplas 
/* nesse conceito, basicamente é possível definir os tipos que
estarão dentro do array, obrigatoriamente deverão seguir esses
tipos pré-definidos */
let endereco = ["Avenida Principal", 100];
console.log(endereco);
let address = ['Avenida Rodolfo', 'Jd. Rodolfo', 321];
console.log(address);
// enums
/* estrutura que é possível definir valores pré-definidos */
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; //2
})(Cor || (Cor = {}));
let minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Cinza, Cor.Verde, Cor.Azul);
//outro exemplo de enum
var Marca;
(function (Marca) {
    Marca["VW"] = "Volks";
    Marca["GM"] = "Chevrolet";
    Marca["BMW"] = "BMW";
})(Marca || (Marca = {}));
let carro = Marca.GM;
console.log(carro);
console.log(Marca.BMW, Marca.GM, Marca.VW);
// any
let celular = 'Samsung';
console.log(celular);
celular = { marca: 'Samsung', ano: 2022 };
console.log(celular);
let scania;
scania = { nome: 'scania', beneficios: 'sim', ano: 2021 };
console.log(scania);
// funções
function retornaMeuNome() {
    //return idade
    return nome;
}
console.log(retornaMeuNome());
//outros exemplo de função
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
//tipo função
//nesse exemplo uma variável recebe uma função
//let calculo
//calculo = digaOi
//calculo()
//
//calculo = multiplicar
//console.log(calculo(5, 6))
/* nesse exemplo é feito uma variável
com o tipo função de fato */
let calculo;
calculo = multiplicar;
console.log(calculo(2, 5));
// objetos
/*os tipos dos atributos já são entendidos
no momento das atribuições, porém você
pode explicitar isso para facilitar o entendimento */
let usuario = {
    nome: "João",
    idade: 20
};
console.log(usuario);
usuario = {
    nome: "Giuliano",
    idade: 234
};
console.log(usuario);
let funcionario = {
    supervisores: ['Irineu', 'Giuliano'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário ';
        }
    }
};
//exemplo definindo os tipos da variável funcionário
//e após isso, é atribuido o objeto de fato
let funcionario2 = {
    supervisores: ['Campos', 'Camposano'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(9));
console.log(funcionario.baterPonto(8));
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(9));
console.log(funcionario2.baterPonto(8));
// union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//checando tipos
let valor = 20; // automaticamente é inferido o tipo number
if (typeof valor === "number") {
    console.log("É um number");
}
else {
    console.log(typeof valor);
}
//never 
//nunca vai chegar no final de forma bem sucedida
//não tem um ponto final atingível (laço infinito ou erro)
//onde vc tem uma função que não termina corretamente
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco < 0) {
            falha('Preço invalido');
        }
    }
};
produto.validarProduto();
let altura = 12;
//altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Irineu',
    tel1: '123456789',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; // any!
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'Teste de nulo';
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 2200,
    depositar(valor) {
        return this.saldo += valor;
    }
};
let correntista = {
    nome: 'Irineu',
    contaBancaria: contaBancaria,
    contatos: '1234-5678'
};
console.log(correntista.contaBancaria.depositar(2000));
let projeto = {
    nome: 'Sistema de monitoramento do ciclo de vida das árvores',
    progresso: '70%',
    proxPassos: ['finalizar telas', 'protótipo']
};
console.log('Nome do projeto:', projeto.nome);
console.log('Progresso Atual:', projeto.progresso);
console.log('Próximos passos:', projeto.proxPassos);
