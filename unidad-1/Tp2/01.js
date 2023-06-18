/* Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
    • Crear 5 autos en un array
    • Iterar el array y mostrar los autos por pantalla
    • Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms
    

            Respuesta:velocidad = espacio/tiempo

            tiempo = espacio /velocidad

            = 3 km / 60 km/hr

            = 0,05 hrs * 3600 seg / hora = 180 seg
    
    */
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, potencia, maxVel) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxVel = maxVel;
    }
    Auto.prototype.getVelocityForTime = function (km) {
        var calc = km / this.maxVel;
        this.time = calc * 3600 / 60;
        console.log("Tiempo estimado en ".concat(Math.round(this.time), " min"));
    };
    Auto.prototype.getDetails = function () {
        console.log("Marca: ".concat(this.marca, " - Modelo: ").concat(this.modelo, " - Potencia: ").concat(this.potencia, " - MaximaVelocidad: ").concat(this.maxVel));
    };
    return Auto;
}());
var autos = new Array();
var auto = new Auto('Ferrari', 'F14', 155, 255);
var autoDos = new Auto('Honda', 'F1', 432, 58);
var autoTres = new Auto('Toyota', 'Etios', 60, 120);
autos.push(auto, autoDos, autoTres);
for (var _i = 0, autos_1 = autos; _i < autos_1.length; _i++) {
    var auto_1 = autos_1[_i];
    auto_1.getDetails();
    auto_1.getVelocityForTime(8);
}
