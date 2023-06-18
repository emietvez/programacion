/* Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos

    • Si le asignamos más de 500.000 disparamos una alarma
    • Si intentamos sacar más de lo que disponemos disparamos otra alarma
    • Si intentamos sacar más de 100.000 disparamos otra alarma  */
var cuentaBancaria = /** @class */ (function () {
    function cuentaBancaria(saldo) {
        this.limitAdd = 500000;
        this.limitOut = 100000;
        this.saldo = saldo;
    }
    cuentaBancaria.prototype.addMoney = function (newCash) {
        if (newCash >= this.limitAdd) {
            return console.log("Alerta, no puede ingresar mas de 500.000");
        }
        this.saldo += newCash;
        return console.log("Monto ingresado satisfactoriamente - Disponible: ".concat(this.saldo));
    };
    cuentaBancaria.prototype.outMoney = function (outCash) {
        if (outCash >= this.limitOut) {
            return console.log("Alerta, no puede retirar mas de 100.000");
        }
        else if (this.saldo < outCash) {
            return console.log("Saldo insuficiente para retiro");
        }
        this.saldo = this.saldo - outCash;
        return console.log("Retiro de ".concat(outCash, " exitoso, saldo disponible en cuenta ").concat(this.saldo));
    };
    return cuentaBancaria;
}());
var mov = new cuentaBancaria(300000);
mov.addMoney(15000);
mov.addMoney(600000);
mov.outMoney(15000);
mov.outMoney(100000);
