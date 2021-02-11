const numerosPares = [2,4,6]
const numerosImpares = [1,3,5]
//const numeros = [numerosPares, numerosImpares]  sem o destructuring
const numeros = [...numerosPares, ...numerosImpares]

console.log(numeros)

//const num1 = 1
//const num2 = 2

//console.log(num1,num2)  sem o destructuring

const [n1, n2] = [1,2]

console.log(n1,n2)

const [num1, num2, ...outrosNumeros] = [1,2,3,4,5]
console.log(outrosNumeros)

const [nome1 = 'Cristiano'] = []

console.log(nome1)


const pessoa = {
    nome:'Cristiano',
    idade:33
}

const pessoaComTelefone = {
    ...pessoa, telefone:11932381517
}

console.log(pessoa, pessoaComTelefone)

//const nome = pessoa.nome

//console.log(nome)

const { nome } = pessoa

console.log(nome)

function imprimeDados(dados){
    const{ nome, idade } = dados
    console.log(nome,idade)
}
imprimeDados(pessoa)
//ou

function imprimeDados({nome,idade}) {
    console.log(nome,idade)
}


imprimeDados(pessoa)