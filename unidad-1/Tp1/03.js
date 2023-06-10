/* Crear una función que calcule la nota final de una
materia. Recibe como parámetro un arreglo de números enteros
que representa la nota de cada TP, calcular y retornar el promedio
del alumno. */
function getPromedio(data) {
    var acum = 0;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var note = data_1[_i];
        acum += note;
    }
    return acum / data.length;
}
var notes = [7, 10, 6.5, 8];
var promedio = 0;
promedio = getPromedio(notes);
console.log("El promedio de notas = ".concat(promedio, " "));
