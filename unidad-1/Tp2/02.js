// Crear una clase Escuela (1) que tiene un listado de dos Cursos al cual se le asignan dos Alumnos 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Escuela = /** @class */ (function () {
    function Escuela(name) {
        this.name = name;
    }
    Escuela.prototype.getEscuela = function () {
        console.log("Nombre de la escuela: ".concat(this.name));
    };
    return Escuela;
}());
var Cursos = /** @class */ (function (_super) {
    __extends(Cursos, _super);
    function Cursos(name, cursos) {
        var _this = _super.call(this, name) || this;
        _this.cursos = cursos;
        return _this;
    }
    Cursos.prototype.getCursos = function () {
        for (var _i = 0, _a = this.cursos; _i < _a.length; _i++) {
            var curso = _a[_i];
            console.log(curso);
        }
    };
    return Cursos;
}(Escuela));
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(name, cursos, alumnos) {
        var _this = _super.call(this, name, cursos) || this;
        _this.alumnos = alumnos;
        return _this;
    }
    Alumno.prototype.getData = function () {
        _super.prototype.getEscuela.call(this);
        _super.prototype.getCursos.call(this);
        for (var _i = 0, _a = this.alumnos; _i < _a.length; _i++) {
            var alumno = _a[_i];
            console.log(alumno);
        }
    };
    return Alumno;
}(Cursos));
var data = new Alumno('Ies9023', ['Matematicas', 'Ingles'], ['Emiliano Estevez', 'Pepito Gonzales']);
data.getData();
