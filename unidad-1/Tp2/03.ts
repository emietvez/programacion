/* Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos

    • Si le asignamos más de 500.000 disparamos una alarma
    • Si intentamos sacar más de lo que disponemos disparamos otra alarma
    • Si intentamos sacar más de 100.000 disparamos otra alarma  */


class cuentaBancaria{
    saldo: number;
    limitAdd: number = 500000;
    limitOut: number = 100000;

    constructor(saldo:number){
        this.saldo = saldo; 
    }

    addMoney(newCash: number){
        if(newCash >= this.limitAdd){
            return console.log("Alerta, no puede ingresar mas de 500.000")
        }
        this.saldo += newCash;
        return console.log(`Monto ingresado satisfactoriamente - Disponible: ${this.saldo}`);
    }

    outMoney(outCash: number){
        if(outCash >= this.limitOut){
            return console.log("Alerta, no puede retirar mas de 100.000")
        }else if(this.saldo < outCash){
            return console.log("Saldo insuficiente para retiro")
        }

        this.saldo = this.saldo - outCash;
        return console.log(`Retiro de ${outCash} exitoso, saldo disponible en cuenta ${this.saldo}`);
    }

}

let mov: cuentaBancaria = new cuentaBancaria(300000);
mov.addMoney(15000);
mov.addMoney(600000);
mov.outMoney(15000);
mov.outMoney(100000);
