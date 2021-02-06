import {Cliente} from "./Cliente.js"               //importando
import {ContaCorrente} from "./ContaCorrente.js"     //abrir o terminal e dar um comando npm init 
                                                    //para testar no node dar um node index.js

const cliente1 = new Cliente("Ricardo",11122233309);
const cliente2 = new Cliente("Alice",88833377709);



const conta1 = new ContaCorrente(cliente1,1001);


const conta2 = new ContaCorrente(cliente2, 102);


conta1.transferir(200,conta2);


console.log(ContaCorrente.numeroDeContas);

