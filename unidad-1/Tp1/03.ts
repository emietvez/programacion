/* Crear una función que calcule la nota final de una
materia. Recibe como parámetro un arreglo de números enteros
que representa la nota de cada TP, calcular y retornar el promedio
del alumno. */
function getPromedio(data: number[]): number{
    let acum: number = 0;
    for(let note of data){
        acum += note;
    }
    return acum / data.length;
}

let notes: number[] = [7, 10, 6.5, 8]
let promedio: number = 0;

promedio = getPromedio(notes);

console.log(`El promedio de notas = ${promedio} `);
