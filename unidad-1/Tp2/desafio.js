/* Supongamos que queremos crear un programa que trabaje con diferentes formas geométricas,
como rectángulos y círculos. Podemos utilizar interfaces para definir
las propiedades y métodos comunes que deben tener estas formas.

calcular

Perimetro
y area


*/
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.calcularPerimetro = function () {
        return 4 * this.lado;
    };
    Cuadrado.prototype.calcularArea = function () {
        return this.lado * this.lado;
    };
    return Cuadrado;
}());
var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
    }
    Circulo.prototype.calcularPerimetro = function () {
        return (this.radio * 2) * Math.PI;
    };
    Circulo.prototype.calcularArea = function () {
        return Math.PI * this.radio * this.radio;
    };
    return Circulo;
}());
var Triangulo = /** @class */ (function () {
    function Triangulo(ladoBase, ladoA, ladoB, altura) {
        this.ladoBase = ladoBase;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.altura = altura;
    }
    Triangulo.prototype.calcularPerimetro = function () {
        return this.ladoBase + this.ladoA + this.ladoB;
    };
    Triangulo.prototype.calcularArea = function () {
        return (this.ladoBase * this.altura) / 2;
    };
    return Triangulo;
}());
var cuadrado = new Cuadrado(5);
console.log("Cuadrado - Perímetro:", cuadrado.calcularPerimetro());
console.log("Cuadrado - Área:", cuadrado.calcularArea());
var circulo = new Circulo(3);
console.log("Círculo - Perímetro: ", circulo.calcularPerimetro());
console.log("Círculo - Área: ", circulo.calcularArea());
var triangulo = new Triangulo(5, 4, 4, 4);
console.log("Triangulo - Perimetro: ", triangulo.calcularPerimetro());
console.log("Triangulo - Area: ", triangulo.calcularArea());
