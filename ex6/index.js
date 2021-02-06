import {Cliente} from "./Cliente.js"               //importando
import {ContaCorrente} from "./ContaCorrente.js"     //abrir o terminal e dar um comando npm init 
                                                    //para testar no node dar um node index.js

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";  //const é uma var
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Alice";  
cliente2.cpf = 88833377709;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;


ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(100);

const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado);


console.log(cliente1)
console.log(ContaCorrenteRicardo);