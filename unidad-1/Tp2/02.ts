// Crear una clase Escuela (1) que tiene un listado de dos Cursos al cual se le asignan dos Alumnos 

class Escuela {
    name:string;

    constructor(name:string){
        this.name = name;
    }

    getEscuela(){
        console.log(`Nombre de la escuela: ${this.name}`)
    }
    
}

class Cursos extends Escuela{
  
    cursos:string[];

    constructor(name:string, cursos: string[]){
        super(name)
        this.cursos = cursos;
    }
    getCursos(){
        for(let curso of this.cursos){
            console.log(curso)
        }
    }
}

class Alumno extends Cursos{
    alumnos:string[];

    constructor(name:string, cursos: string[], alumnos:string[]){
        super(name, cursos)
        this.alumnos = alumnos;
    }

    getData(){
        super.getEscuela();
        super.getCursos(); 
        for(let alumno of this.alumnos){
            console.log(alumno);
        }        
    }
}

let data: Alumno = new Alumno('Ies9023',['Matematicas', 'Ingles'], ['Emiliano Estevez', 'Pepito Gonzales'])

data.getData();