class Data {
    //Público por padrão
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const empresa = new Data
empresa.dia = 1
empresa.mes = 8
empresa.ano = 2021
console.log(empresa);


//Praticando

class Carro {
    motor: string
    fabricante: string
    ano: number

    constructor(motor: string = '', fabricante: string = '', ano: number = 2017) {
        this.motor = motor
        this.fabricante = fabricante
        this.ano = ano
    }
}

const meuCarro = new Carro
meuCarro.motor = 'TSI 1.0'
meuCarro.fabricante = 'VW'
meuCarro.ano = 2017
console.log(meuCarro);

//Praticando

class Celular {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string = '', modelo: string = '', ano: number = 1) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
}

const meuCel = new Celular
meuCel.marca = 'Samsung'
meuCel.modelo = 'S22'
meuCel.ano = 2022

console.log(meuCel);

//Praticando

class Computador {
    placa: string
    ram: number
    rgb: boolean

    constructor(placa: string = '', ram: number = 8, rgb: boolean = true) {
        this.placa = placa
        this.ram = ram
        this.rgb = rgb
    }
}

const meuPc = new Computador
meuPc.placa = 'RTX'
meuPc.ram = 16
meuPc.rgb = true

console.log(meuPc);

//Praticando

class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1) {
    }
}

const aniver = new DataEsperta
aniver.dia = 21
aniver.mes = 6
aniver.ano = 2001
console.log(aniver);


//Desafio

class Produto {
    constructor(
        public nome: string = '',
        public preco: number = 1,
        public desconto: number = 0) { }

    precoComDesconto() {
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} com ${this.desconto}% de desconto!`
    }
}

const tenis = new Produto()
tenis.nome = 'Nike Dunk Low'
tenis.preco = 800.00
tenis.desconto = 0.1
console.log(tenis.resumo());

// const mouse = new Produto
// mouse.nome = 'Logitech MX Vertical'
// mouse.preco = 'R$500.00'
// mouse.desconto = 0.0
// console.log(mouse);


class PostoDeGasosa {
    constructor(
        public quantidade: number = 1,
        public precoGasosa: number = 5) {
    }

    public calculo(): number {
        return this.quantidade * (this.precoGasosa)
    }
}

const usuario1 = new PostoDeGasosa
usuario1.quantidade = 20
usuario1.precoGasosa = 6

console.log(usuario1.calculo());
console.log(`Colocando 20L de gasolina, você pagará ${usuario1.calculo()} reais! (Preço atual da gasosa: ${usuario1.precoGasosa} reais)`);



//Herança - Um dos pilares da POO.



//Private e Protected

//protected exerce a mesma função de private, porém com a possibilidade de execer heranças sem barramentos.

class Ferrari extends Carro {
}

const f40 = new Ferrari('4.0 Biturbo', 'Ferrari', 2010)
console.log(`${f40.motor}, ${f40.ano}!`);


//Getters and Setters

class Pessoa {
    private _idade: number = 0;

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10;
console.log(pessoa1);


class Console {
    private preco: number = 0;

    set jogo(valor: number) {
        if (valor >= 0 && valor < 200) {
            console.log('bom')
            this.preco = valor
        }
    }
}

const console1 = new Console
console1.jogo = 150;
console.log(console1);



// Atributos e métodos estáticos


// Estanciando
class Matematica {
    PI: number = 3.14;

    areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

const m1 = new Matematica()
console.log(m1.areaCirc(4));

// Estático

class Calculo {
    static PI: number = 3.14

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

console.log(Calculo.areaCirc(4));


// Classe Abstrata - Específico do TS, não existe no JS

// Classes abstratas não podem ser instânciadas.

abstract class Calculate {
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void
    
    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculate {
    //Esta classe Soma deve conter a função da Classe Calculate

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t , a) => t * a)
        // reduce => nesse caso, essa função soma todos os números de um array.
    }
}

class Multiplicacao extends Calculate {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
        // reduce => nesse caso, essa função multiplica todos os números de um array.
    }
}

// Somente Leitura

class Aviao {
    public readonly modelo: string

    constructor(
        modelo: string, 
        public readonly prefixo: string) {
            this.modelo = modelo
        }
}

const turboHelice = new Aviao('Tu-114', 'PT')
console.log(turboHelice);



