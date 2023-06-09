/* Dados 2 arreglos de números enteros de la misma
longitud, obtener un nuevo arreglo a partir de la suma de los
elementos de ambos arreglos en la misma posición, y mostrar el
arreglo resultante. Por ej.
=> [3, 4, 0, 3, 12, 2]
[2, 9, 0, 5, 22, 14]
[-1, 5, 0, 2, 10, 12] */
var arrayOne = [3, 4, 0, 3, 12, 2];
var arrayTwo = [-1, 5, 0, 2, 10, 12];
var fusionArray = [];
for (var i = 0; i < arrayOne.length; i++) {
    fusionArray.push(arrayOne[i] + arrayTwo[i]);
}
console.log("Array fusion => " + fusionArray);
