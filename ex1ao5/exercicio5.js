class Cliente {      //atributos
    nome;
    cpf;
}

class ContaCorrente {    //O _ serve pra deixar alguma coisa privada, e é a convenção coletiva.
    agencia;
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor){     //this = dessa referindo-se a class
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0 ){
            return;
        }
            this._saldo += valor;
                
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
ContaCorrenteRicardo.depositar(100);
ContaCorrenteRicardo.depositar(100);

const valorSacado = ContaCorrenteRicardo.sacar(50);
console.log(valorSacado);


console.log(cliente1)
console.log(ContaCorrenteRicardo);