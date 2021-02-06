import {Cliente} from "./Cliente.js"               //importando
import {ContaCorrente} from "./ContaCorrente.js"     
import { ContaPoupanca } from "./ContaPoupanca.js";
                                                   

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Alice",88833377709);


const conta1 = new ContaCorrente(cliente1,1001);
conta1.depositar(500);
conta1.sacar(100);

const conta2 = new ContaCorrente(cliente2, 102);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

console.log(conta1);
console.log(contaPoupanca);

