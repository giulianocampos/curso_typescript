"use strict";
//let & const 
let estaFrio = true;
if (estaFrio) {
    let acao = "Colocar casaco!";
    console.log(acao);
}
const cpf = '123.456.000.99';
//cpf = '123.456.564.66'; não irá funcionar, constante não se altera
console.log(cpf);
//Foi explicado os conceitos de Bloco, no qual as variaveis
//let e const, só serão acessadas caso estejam sendo chamadas
//dentro do bloco.
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//Arrow Function
//basicamente significa a resposta que a determinada função vai retornar.
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(5, 5));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 4));
const mensagem = (msg) => msg;
console.log(mensagem('Esta é a mensagem!!!'));
const saudacao = () => console.log("Olá, tudo bem?");
saudacao();
const falarCom = (pessoa) => console.log('Olá ' + pessoa);
falarCom('John John!');
const idadeVital = (anos) => console.log('Sua idade é de ' + anos + ' anos');
idadeVital(10);
//Parâmtros padrão
function contagemRegressiva(inicio = 5) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva(6);
// Rest & Spread
//Spread: vai transformar os valores de dentro do array em parametros,
//e assim a função irá  ser executada para todos esses parametros
const numbers = [1, 10, 20, 30, 40, 50];
console.log(Math.max(...numbers));
//Rest
const turmaA = ['João', 'Marcola', 'Irineu'];
const turmaB = ['Amanda', 'Hugo', 'Daniel', ...turmaA];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numerosss = retornarArray(1, 2, 3, 4, 5, 446);
console.log(numerosss);
//console.log(retornarArray(...numbers))
//praticando
function mostrarNomes(...args) {
    return args;
}
const nomesss = mostrarNomes('Irineu', 'Giuliano', 'Teste');
console.log(nomesss);
//Rest & Spread (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor TSI 1.0', 2017, true];
const [motor, ano, seguro] = caracteristicas;
console.log(motor, ano, seguro);
//Destructuring (objeto)
const item = {
    nome: 'SSD',
    preco: 200,
    caracteristicas: {
        c: 'importado'
    }
};
const nomeItem = item.nome;
const precoItem = item.preco;
console.log(nomeItem);
console.log(precoItem);
const { nome: n, preco: p, caracteristicas: { c } } = item;
console.log(n);
console.log(p);
console.log(c);
//Template String
const usuarioNome = 'Giuliano';
const usuarioIdade = 21;
const boasVindas = `Olá ${usuarioNome}, você tem ${usuarioIdade} anos de idade! `;
console.log(boasVindas);
console.log(`Motor: ${caracteristicas[0]}`);
//Desafios
const dobro = (valor) => valor * 2;
console.log(dobro(25));
const nums = [-3, 33, 38, 5];
console.log(Math.max(...nums));
console.log(Math.min(...nums));
//
const array = [55, 20, 10, ...nums];
console.log(array);
const aleatorios = [10, 20, 30];
const agoraVai = [40, 50];
aleatorios.push(...agoraVai);
console.log(aleatorios);
//
const dizerOla = function (nome = 'Pessoa') {
    console.log('Olá, ' + nome);
};
dizerOla();
dizerOla('Giuliano');
//
const notas = [8.5, 6.5, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
//
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
