import {Cliente} from "./Cliente.js"               //importando
import {ContaCorrente} from "./ContaCorrente.js"     //abrir o terminal e dar um comando npm init 
                                                    //para testar no node dar um node index.js

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";  //const é uma var
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Alice";  
cliente2.cpf = 88833377709;

const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 1001;
conta1.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

conta1.transferir(200,conta2);


console.log(conta2.cliente);

console.log(conta2.saldo);
