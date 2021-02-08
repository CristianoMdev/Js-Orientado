import {Cliente} from "./Cliente.js"               
import {ContaCorrente} from "./ContaCorrente.js"     
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";
                                 

const cliente1 = new Cliente("Ricardo",11122233309);


const cC1 = new ContaCorrente(cliente1, 1001);
const cP1 = new ContaPoupanca(50, cliente1, 1001);
const cS1 = new ContaSalario(cliente1)
cS1.depositar(100);
cS1.sacar(10);

console.log(cS1);

