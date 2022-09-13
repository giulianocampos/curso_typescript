"use strict";
//noEmitOnError, no arquivo tsconfig.json (configurações do compilador)
//sendo assim, ao invés de continuar compilando no console, mesmo com erro,
//o código não irá mais compilar.
let canal = 'Gaveta';
let inscritos = 610234;
//canal = inscritos
console.log(canal);
// strict null check
// checa se o retorno ou resposta tem a possibilidade de returnar null
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
}
console.log(saudar(false));
//praticando
function validar(senha) {
    let msg;
    if (senha) {
        msg = "Acesso permitido";
    }
    else {
        msg = "Acesso negado";
    }
    return msg;
}
console.log(validar(true));
//praticando
function motivar(motivado) {
    let msg;
    if (motivado) {
        msg = "Siga em frente";
    }
    else {
        msg = "Repense as prioridades";
    }
    return msg;
}
console.log(motivar(true));
//outFile
//compila um único arquivo de saída, ou seja,
//irá criar um único arquivo JS e juntar todos os outros neste único
