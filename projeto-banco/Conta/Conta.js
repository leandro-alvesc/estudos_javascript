import { Cliente } from "./Cliente.js"

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta){
        throw new Error("Você não deveria instanciar um objeto do tipo Conta.");
    }
    this.cliente = cliente;
    this.agencia = agencia;
    this._saldo = saldoInicial;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    throw new Error("O método sacar() da Conta é abstrato.");
  }

  _sacar(valor, taxa){
    if (this._saldo >= valor) {
        this._saldo -= valor + (valor * taxa);
        return valor;
      }
    return 0;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
