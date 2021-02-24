import { Cliente } from "./Conta/Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Gilberto", 10000, 12345678900);
const gerente = new Gerente("Ana", 5000, 45678912300);
const cliente = new Cliente("Carmen", 45678752300, "1472");

diretor.cadastrarSenha("123456789");
gerente.cadastrarSenha("12345");

const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1472");

console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
