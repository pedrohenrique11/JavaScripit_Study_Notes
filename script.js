// AULA 1 

// Variaveis e Objetos

// O valor atribuido a uma "constante" nao pode ser alterado 
const name = 'pedro';
const sobrenome = undefined;

// O valor atribuido ao "let" pode ser alterado, e so funciona dentro da funcao que foi escrito
let idade = 18;
let genero = 'masculino';

let curso = null; // O valor "null" pode ser alterado varias vezes
const aprovado = true;

// Obijeto vai juntar informacoes em um lugar so, podendo ser acessado posteriormente
let user = {
    name: 'Pedro',
    idade: 18,
    aprovado: true,
};

//---------------------------------------------------------------------------------------//

// AULA 2 - Arrays

// Arrays - Permitem que uma Varieavel/Constante possa receber mais de um valor

let family = ['pedro', 'clara', 'socorro']

// os valores podem ser acessados atravez dos indices sendo os valores dados de 0 ate o ultimo valor declarado
//console.log(family[1]);
//resultado = clara

// Pode ser colocado comandos atavez do '.' no final da variavel, como 'family.leigh' que ira contar quantos valores tem na Array

//---------------------------------------------------------------------------------------//

// AULA 3 - Funcions

//Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
let siteColor = "yellow";

//Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.

//Parametros = sao dados inseridos na function
//Argumentos = sao o que sera feito com os Parametros insridos na function
function changeColor(color, hue) {
    siteColor = color + ' ' + hue;
};
changeColor("blue" ,"sapphire")

// Uma function deve ser nomeada com verbo + substantivo = setNumber


// AULA 4 - Functions II

// Exemplo I - Pode realizar uma tarefa, mas nao retorna nada
function sayName() {
    console.log ('pedro o belo')
}
//sayName();

// Exemplo II - Realiza uma tarefa e retorna algo "return"
 function multi(number){
     return number* 2;
 }

 let multiFive = multi(5);
//console.log(resultado)

//---------------------------------------------------------------------------------------//

// AULA 5 - Operadores

// Operadores Aritimetricos(Matematicos) -----------------------------------------------//

// +, -, *, /, **
let salary = 1167;

//console.log(salary + salary)
//console.log(salary - multiFive)
//console.log(salary / multiFive)
//console.log(salary * salary)
//console.log(salary ** salary)

// ++, --
let age = 18

//console.log(age++)
//console.log(age)
//console.log(--age)


//Operadores de Atribuicao -------------------------------------------------------------//
let bookPrice = 27;

// bookPrice = bookPrice + bookPrice
bookPrice += bookPrice

// bookPrice = bookPrice - bookPrice
bookPrice -= bookPrice

//console.log(bookPrice)

//Operadores de Igualdade -------------------------------------------------------------//

//Igualdade Restrita - essa igualdade confere o valor e o tipo de valor deve ser exatamente igual para serem true

//console.log( 1 === 1)
//"true"

//console.log('1' === 1)
//"false"

//Operadores de Ternario --------------------------------------------------------------//

// tem um usuario, se ele tiver mais que 100 points ele e premium, caso contrario ele sera comum
let userPoints = 101;
let userStatus = userPoints > 100 ? 'premium' : 'comum';
//console.log(userStatus)

//Operadores Logicos -----------------------------------------------------------------//

let pagouInscricao = true;
let naoUsouAnabol = false;
let exameNaoDetectaAnabol = true;

// "E" (&&)
// Retorna true se os dois operandos forem true
//let podeCompetir = pagouInscricao && naoUsouAnabol; = false

// "OU" (||)
//Retorna true se um dos operandos for true
let podeCompetir = pagouInscricao && naoUsouAnabol || exameNaoDetectaAnabol;
console.log('Pode Competir ?', podeCompetir)

//"NOT" (!)
// Retorna false
let competidorDesclassificado = !podeCompetir
console.log('Foi desclassificado ?', competidorDesclassificado)
