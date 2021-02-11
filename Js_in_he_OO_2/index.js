import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Carlos", 5000, 32132132100);
const cliente = new Cliente("Camila", 55522233389, "321" );
diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("1234");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gernteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "321");
console.log(diretorEstaLogado,  gernteEstaLogado, clienteEstaLogado);
