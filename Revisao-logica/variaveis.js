//--------------VARIÁVEIS-------------//

// var, let, const

// var -> ES5 - cross-browser 

// let e const -> ES2015

let teste = "Isso é uma String";
console.log(teste);

//O javaScript é uma linguagem fracamente tipada o que me permite alterar um valor atribuído a uma variável

teste = 10;
console.log(teste);

// o uso do const não permite que se reatribua valores a ele

const testeConstante = "Não posso reatribuir valor à uma constante";
console.log(testeConstante);

const testeConstante2 = "Eu sou imutável";
console.log(testeConstante2);

// Não é obrigatória a atribuição de um valor a uma variável no momento exato de sua criação, com exceção na declaração de uma constante

let teste2;
console.log(teste2); // retorna undefined

teste2 = 25;
console.log(teste2); // retorna o valor atribuído

