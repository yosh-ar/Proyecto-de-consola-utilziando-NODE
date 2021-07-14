const { v4 : uuidV4} = require('uuid');

class Tarea {
    id = '';
    descripcion = '';
    completado = null; 
    constructor(descrip){
        this.id = uuidV4();
        this.descripcion = descrip;
        this.completado = null;
    }
}


module.exports = Tarea;