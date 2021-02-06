class Cliente {      //atributos
    nome;
    cpf;
}

class ContaCorrente {    //O # serve pra deixar alguma coisa privada, no nosso caso o saldo.
    agencia;
    #saldo = 0;

    sacar(valor) {
        if(this.#saldo >= valor){     //this = dessa referindo-se a class
            this.#saldo -= valor;
        }
    }

    depositar(valor) {
        if(valor > 0 ){
            this.#saldo += valor;
            console.log(this.#saldo);
        }
    }

}



const cliente1 = new Cliente();
cliente1.nome = "Ricardo";  //const é uma var
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Alice";  
cliente2.cpf = 88833377709;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;


ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.sacar(50);

console.log(cliente1)
console.log(ContaCorrenteRicardo);
