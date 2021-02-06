class Cliente {      //atributos
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";  //const é uma var
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";  //const é uma var
cliente2.cpf = 88833377709;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);