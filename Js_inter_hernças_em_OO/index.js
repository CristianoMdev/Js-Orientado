import {Cliente} from "./Cliente.js"               
import {ContaCorrente} from "./ContaCorrente.js"     
import { ContaPoupanca } from "./ContaPoupanca.js";
                                  

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Alice",88833377709);

const cC1 = new ContaCorrente(cliente1, 1001);
cC1.depositar(500);
cC1.sacar(100);

const cC2 = new ContaCorrente(cliente2, 102);
const cP1 = new ContaPoupanca(50, cliente1, 1001)

console.log(cP1);
console.log(cC1);
