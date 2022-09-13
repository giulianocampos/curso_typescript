"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const empresa = new Data;
empresa.dia = 1;
empresa.mes = 8;
empresa.ano = 2021;
console.log(empresa);
//Praticando
class Carro {
    constructor(motor = '', fabricante = '', ano = 2017) {
        this.motor = motor;
        this.fabricante = fabricante;
        this.ano = ano;
    }
}
const meuCarro = new Carro;
meuCarro.motor = 'TSI 1.0';
meuCarro.fabricante = 'VW';
meuCarro.ano = 2017;
console.log(meuCarro);
//Praticando
class Celular {
    constructor(marca = '', modelo = '', ano = 1) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}
const meuCel = new Celular;
meuCel.marca = 'Samsung';
meuCel.modelo = 'S22';
meuCel.ano = 2022;
console.log(meuCel);
//Praticando
class Computador {
    constructor(placa = '', ram = 8, rgb = true) {
        this.placa = placa;
        this.ram = ram;
        this.rgb = rgb;
    }
}
const meuPc = new Computador;
meuPc.placa = 'RTX';
meuPc.ram = 16;
meuPc.rgb = true;
console.log(meuPc);
//Praticando
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniver = new DataEsperta;
aniver.dia = 21;
aniver.mes = 6;
aniver.ano = 2001;
console.log(aniver);
//Desafio
class Produto {
    constructor(nome = '', preco = 1, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} com ${this.desconto}% de desconto!`;
    }
}
const tenis = new Produto();
tenis.nome = 'Nike Dunk Low';
tenis.preco = 800.00;
tenis.desconto = 0.1;
console.log(tenis.resumo());
// const mouse = new Produto
// mouse.nome = 'Logitech MX Vertical'
// mouse.preco = 'R$500.00'
// mouse.desconto = 0.0
// console.log(mouse);
class PostoDeGasosa {
    constructor(quantidade = 1, precoGasosa = 5) {
        this.quantidade = quantidade;
        this.precoGasosa = precoGasosa;
    }
    calculo() {
        return this.quantidade * (this.precoGasosa);
    }
}
const usuario1 = new PostoDeGasosa;
usuario1.quantidade = 20;
usuario1.precoGasosa = 6;
console.log(usuario1.calculo());
console.log(`Colocando 20L de gasolina, você pagará ${usuario1.calculo()} reais! (Preço atual da gasosa: ${usuario1.precoGasosa} reais)`);
//Herança - Um dos pilares da POO.
//Private e Protected
//protected exerce a mesma função de private, porém com a possibilidade de execer heranças sem barramentos.
class Ferrari extends Carro {
}
const f40 = new Ferrari('4.0 Biturbo', 'Ferrari', 2010);
console.log(`${f40.motor}, ${f40.ano}!`);
//Getters and Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
class Console {
    constructor() {
        this.preco = 0;
    }
    set jogo(valor) {
        if (valor >= 0 && valor < 200) {
            console.log('bom');
            this.preco = valor;
        }
    }
}
const console1 = new Console;
console1.jogo = 150;
console.log(console1);
// Atributos e métodos estáticos
// Estanciando
class Matematica {
    constructor() {
        this.PI = 3.14;
    }
    areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
const m1 = new Matematica();
console.log(m1.areaCirc(4));
// Estático
class Calculo {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Calculo.PI = 3.14;
console.log(Calculo.areaCirc(4));
// Classe Abstrata - Específico do TS, não existe no JS
// Classes abstratas não podem ser instânciadas.
class Calculate {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculate {
    //Esta classe Soma deve conter a função da Classe Calculate
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
        // reduce => nesse caso, essa função soma todos os números de um array.
    }
}
class Multiplicacao extends Calculate {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
        // reduce => nesse caso, essa função multiplica todos os números de um array.
    }
}
// Somente Leitura
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT');
console.log(turboHelice);
