/* Supongamos que queremos crear un programa que trabaje con diferentes formas geométricas, 
como rectángulos y círculos. Podemos utilizar interfaces para definir 
las propiedades y métodos comunes que deben tener estas formas. 

calcular

Perimetro
y area


*/

interface FormaGeometrica {
    calcularPerimetro(): number;
    calcularArea(): number;
}

class Cuadrado implements FormaGeometrica {
    lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Circulo implements FormaGeometrica {
    radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularPerimetro(): number {
        return (this.radio * 2 )* Math.PI;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

class Triangulo implements FormaGeometrica {
    ladoBase: number;
    ladoA: number;
    ladoB: number;
    altura:number

    constructor(ladoBase:number,ladoA:number, ladoB: number, altura:number){
        this.ladoBase = ladoBase;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.altura = altura;
    }

    calcularPerimetro(): number {
        return this.ladoBase + this.ladoA + this.ladoB;
    }

    calcularArea(): number {
        return (this.ladoBase * this.altura) / 2
    }
}


const cuadrado = new Cuadrado(5);
console.log("Cuadrado - Perímetro:", cuadrado.calcularPerimetro());
console.log("Cuadrado - Área:", cuadrado.calcularArea());

const circulo = new Circulo(3);
console.log("Círculo - Perímetro: ", circulo.calcularPerimetro());
console.log("Círculo - Área: ", circulo.calcularArea());

const triangulo = new Triangulo(5, 4, 4, 4);
console.log("Triangulo - Perimetro: " ,triangulo.calcularPerimetro());
console.log("Triangulo - Area: " ,triangulo.calcularArea());


