

//  Strings, numbers (int, floats), boolean

let dados = "Eu sou uma string";
console.log(dados);

let dados1 = `Eu sou uma template literal`; // Utilizada para exibir dados de forma dinâmica.

//Abaixo utilizamos  concatenações

let dados2 =  10 + " é um  primitivo do tipo number inteiro ou int"; 
console.log(dados2);

let dados3 = 5.4 + " é um primitivo do tipo number flutuante ou float";
console.log(dados3);

let dados4 = true + " Eu sou um tipo de dado booleano true (verdadeiro)"; 
console.log(dados4);

let dados5 = false + " Eu sou um tipo de dado booleano false (falso)";
console.log(dados5); 

let dados6; // retorna undefined que é quando uma variável é declarada mas nenhum valor é atribuído.
console.log(typeof dados6); // retorna o tipo da variável que nesse caso é undefined
console.log(dados6); // retorna o valor da variável que também é undefined

let dados6a = "dados6a recebeu o valor de " + 20 + "," + " portanto é uma variável do tipo number com valor 20 atribuído";
console.log(typeof dados6a);
console.log(dados6a);