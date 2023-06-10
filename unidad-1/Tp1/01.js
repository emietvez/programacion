/* Dado un arreglo de números determinar cuál es el
mayor y mostrarlo, si existe el número cero una o más veces en el
arreglo también mostrar “Hay un cero”, pero una sola vez. Por ej.
=> [3, 4, ​0​, 3, ​0​, 9, ​12​, 5]
12
“Hay un cero”
=> [4, -4, 10, 23, 3, 4, 12, ​50​]
50   */
var listNumbers = [4, -4, 10, 23, 3, 4, 12, 50];
var numMay = 0;
var message = '';
for (var _i = 0, listNumbers_1 = listNumbers; _i < listNumbers_1.length; _i++) {
    var listNumber = listNumbers_1[_i];
    if (listNumber > numMay) {
        numMay = listNumber;
    }
    if (listNumber == 0) {
        message = "Hay un cero";
    }
}
console.log(numMay + ' ' + message);
