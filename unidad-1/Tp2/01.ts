/* Crear una clase de Auto con los atributos (marca, modelo, potencia, max. velocidad)
    • Crear 5 autos en un array
    • Iterar el array y mostrar los autos por pantalla
    • Iteramos los autos y calculamos con un método (calcular tiempo) cuanto tarda en forma óptima en recorrer x kms 
    

            Respuesta:velocidad = espacio/tiempo

            tiempo = espacio /velocidad

            = 3 km / 60 km/hr

            = 0,05 hrs * 3600 seg / hora = 180 seg
    
    */

class Auto {
    marca: string;
    modelo: string;
    potencia: number;
    maxVel: number;
    time: number;

    constructor(marca: string, modelo: string, potencia: number, maxVel: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
        this.maxVel = maxVel;
    }


    getVelocityForTime(km: number) {
        let calc: number = km / this.maxVel;
        this.time = calc * 3600 / 60;

        console.log(`Tiempo estimado en ${ Math.round(this.time)} min`);
    }

    getDetails() {
        console.log(`Marca: ${this.marca} - Modelo: ${this.modelo} - Potencia: ${this.potencia} - MaximaVelocidad: ${this.maxVel}`)
    }
}

let autos = new Array();

let auto: Auto = new Auto('Ferrari', 'F14', 155, 255);
let autoDos: Auto = new Auto('Honda', 'F1', 432, 58);
let autoTres: Auto = new Auto('Toyota', 'Etios', 60, 120);
autos.push(auto, autoDos, autoTres);

for(let auto of autos){
    auto.getDetails();
    auto.getVelocityForTime(8);
}


