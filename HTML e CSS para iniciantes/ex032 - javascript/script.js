const nome = 'java';

console.log(nome); /*não é possivel redefinir o valor com const*/

let Nome = "java";
Nome = "css";
console.log(Nome);/*é possivel redefinir o valor com let*/

const nav = document.querySelector('nav');
const produtos = document.querySelector('.produtos a');
console.log(nav); /*o querySelector serve para selecionar qualquer coisa especifica no html*/

console.log(produtos.innerHTML); //o innerHTML retorna exatamente o html que está dentro do elemento selecionado

/* para manipular o DOM(documento) primeiro vc seleciona o elemento com o querySelector e depois trabalha com ele através de propriedades e métodos*/

console.dir(produtos); /*o dir me informa todas as possibilidades de manipulação de metodos do elemento*/

//TIPOS DE ATRIBUTOS

//string
const text = 'JavaScript';
const frase = 'isso é o meu "jogo"'; //para usar as duplas como string envolva a string com aspas simples
console.log(text + frase); //utilize o + para juntar as strings em uma frase

//num
let total = 0;
const compras = 30;
const imposto = 10;

total = compras + imposto; //o sinal de + soma dos valores dos nums
const dobro = total * 2;
const dividir = total / 2;
const desc = total - 2;

const strings = '20' + '20'; //junta
const num = 20 + 20; //soma
const transformar = Number('20') + 20; //converte (Convert.ToInt32("20");)
const double = 20.5; //valor quebrado
console.log(total);

//objeto
const livro = 'o senhor dos anéis';
const ano = 1954;
const autor = 'j. r. r. tolkein';

const livro2 = {
    nome:'o senhor dos aneis',
    ano: 1954,
    autor: 'j. r. tolkein'
}

const filme = {
    nome:'o senhor dos aneis',
    ano: 1954,
    autor: 'j. r. tolkein'
}

console.log(livro.ano); //desta maneira podemos selecionar um item especifico dentro do objeto
console.log(2022 - livro.ano); //subtrair a partit do item selecionado de dentro do objeto
console.log(filme.diretor + livro.ano); //juntar as strings partit dos itens selecionados de dentro dos objetos

console.log(filme.nome === nome); //o mais importante é oq está dentro do objeto

const p = document.querySelector('p');

console.log(p.clientHeight);//retorna exatamente a altura do html que está dentro do elemento
console.log(autor.length); //retorna exatamente a quantidade de caracteres do html que está dentro do elemento
console.log(autor.toUpperCase()); //retorna todos os caracteres do html em letra maiúscula
console.log(autor.toLowerCase()); //retorna todos os caracteres do html em letra minuscula
const decimal = 20.99; //valor quebrado
console.log(decimal.toFixed()); //arredonda valores decimais em formato de string

//function
function logCurso(){ //criando a função
    const linguagem = 'javascript';
    console.log(linguagem);
}

logCurso(); //executando a função

function logCurso(linguagem){ //criando a função
    console.log(linguagem);
}

logCurso('javascript');