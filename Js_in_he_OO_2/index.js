import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Carlos", 10000, 32132132100);
diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("1234");

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(estaLogado);
