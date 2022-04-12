class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (this._saldo < valor) {
            return "Saldo insuficiente para sacar"
        }
        this._saldo = this._saldo - valor;

        return "Valor restante:" + this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return 'Saldo atual:' + this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor) {
        if (valor > 500) {
            return "Valor acima do limite para saque"
        }
        if (this._saldo < valor) {
            return "Saldo insuficiente para sacar"
        }
        this._saldo = this._saldo - valor;

        return "Valor restante:" + this._saldo;
    }
}
