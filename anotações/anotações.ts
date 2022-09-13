//Anotações e explicações

//No exemplo abaixo, temos um Array de 50 posições. 
//A função fill() faz com que todas as posições de um Array sejam ocupadas.
//No caso abaixo, todas as 50 posições, serão ocupadas com o valor 0.

//Já a função forEach() é fazer com que, para cada posição, seja executada uma função.
//No caso abaixo, a palavra 'Olá' será exibida 50 vezes.

Array(50).fill(0).forEach(() => console.log('Olá'));



