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

// AULA 5 - Operadores  //

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
//console.log('Pode Competir ?', podeCompetir)

//"NOT" (!)
// Retorna false
let competidorDesclassificado = !podeCompetir
//console.log('Foi desclassificado ?', competidorDesclassificado)


// Falsy (undefined, null, 0, false, '', NaN - not a number)
// Truthy (true e Tudo que nao seja falsy)
let corPersonalizada = ''; //falsy
let corPadrao = 'Azul'; //truthy
let corPerfil = corPersonalizada || corPadrao;

//console.log(corPerfil); //Azul

//---------------------------------------------------------------------------------------//

//  TROCANDO O VALOR DE VARIAVEIS

let a = 'vermelho';
let b = 'azul';

let c = a;

a = b

b = c

//console.log(a)
//console.log(b)

//---------------------------------------------------------------------------------------//

//  CONDICIONAIS  //

// If..Else -----------------------------------------------------------------------------//

    /*if(condicao) {
        //codigo a ser executado
    }
    else if (outraCondicao) {
        //codigo a ser executado
    }
    else {
        //codigo a ser executado
    }*/

// Exemplo I
// Se a hora estiver entre 06:00 e 12:00 a mensagem exibira "Bom Dia !"
// Se estiver entre 12:00 e 18:00 exibira "Boa Tarde !"
// Caso contrario exibira "Boa Noite !"
let hour = 11;

if(hour > 6 && hour < 12 ) {
    //console.log("Bom Dia !")
}
else if(hour > 12 && hour < 18) {
    //console.log("Boa Tarde !")
}
else {
    //console.log("Boa Noite !")
} 

// Switch..Case --------------------------------------------------------------------------//

let permissao; // student, teacher, principal
permissao = 'teacher'

switch (permissao) {
    case 'student': //caso o valor da variavel seja 'studant'
        console.log('student user'); // codigo a ser executado
    break;

    case 'teacher':
        //console.log('teacher user');
    break;

    case 'principal':
        console.log('principal user');
    break;

    default: // caso nao seja nenhuma das opcoes
        //console.log('user undefined')
}

//---------------------------------------------------------------------------------------//

// LOOP FOR //

// For ----------------------------------------------------------------------------------//
for(let i = 0; i <= 5; i++) // loop de 0 a 4
    if(i % 2 !== 0 ) { // mostrando apenas os impares do loop
        //console.log(i)
    }

// While --------------------------------------------------------------------------------//

let j = 5;

while (j >= 1) {
    if(j % 2 !== 0) {
        //console.log(j)
    }
    j--;
}
// Do..While ----------------------------------------------------------------------------//
let d = 0
do {
    //console.log( 'digitando!',d)
    d++;
} while (d <= 10);

// for --------------------------------------------------------------------------------//
const indv = {
  //key: value,
    nome: 'pedro',
    idade: 18 ,
}

for (let key in indv) {
    //console.log(key,indv);
}

// for-of --------------------------------------------------------------------------------//
// consegue pegar os valores que estao no array sem enumerar
const movies = ['blade runner', 'taxi driver', 'logan']

for (let movie of movies) {
    //console.log(movie)
}

//---------------------------------------------------------------------------------------//
// EXERCICIO //

// Escrever uma funcao que usa 2 numeros e retorna o maior entre eles 

let maiorNumero = maiorNumeroEntre(11, 67)
//console.log(maiorNumero)

function maiorNumeroEntre(x,z) {
    if (x > z) {
        return x;
        //console.log(x)
    }
    else {
        return z;
        //console.log(z)
    }
}
//maiorNumeroEntre(11, 67)

// Correcao -- forma mais simples de fazer a comparacao

let numberTest = max(11,67)
//console.log(numberTest)

function max(x,z) {
    return x > z ? x : z ;
}

//---------------------------------------------------------------------------------------//

// FizzBuzz - EXECICIO //

//Divisivel por 3, retorna Fizz
//Divisivel por 5, retorna Buzz
//Divisivel por 3 e 5, retorna FizzBuzz
//Nao e divisivel por 3 e 5, retorna a entrada
//Nao e um numero, retorna 'nao e um numero' 

const resultFizzBuzz = fizzBuzz();
console.log(resultFizzBuzz)

function fizzBuzz(entrada) {      
    if (entrada % 3 === 0 && entrada % 5 === 0) 
        return 'FizzBuzz';
    else if ( entrada % 3 === 0 )
        return 'Fizz';
    else if ( entrada % 5 === 0 )
        return 'Buzz';
    else if ( typeof entrada !== 'number' ) 
        return 'Não é um número !!!';
    else return entrada  
}

//---------------------------------------------------------------------------------------//
