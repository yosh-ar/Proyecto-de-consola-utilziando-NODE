const Tarea = require('./Tarea')


class Tareas{
    constructor(){
        this.listado = {};
    }

    get listarArr(){
        let list = [];
        Object.keys(this.listado).forEach(key => list.push(this.listado[key]));
        return list;
    }
    cargarTareas(tareas){
       tareas.forEach((tarea)=>{
            this.listado[tarea.id] = tarea;
       });
    }

    crearTarea(descripcion){
        const tarea = new Tarea(descripcion);
        this.listado[tarea.id] = tarea;
    }
    listarTodas(){
        this.listarArr.forEach((lista, index)=>{
            const {descripcion, completado} = lista;
            const idx = `${index+1}`.green;
          console.log(`${idx} ${descripcion} :: ${(completado==null)? 'Pendiente'.red : 'Completado'.green}`);
        })
    }
    listarTareasCompletadas(estado = true){
        this.listarArr.forEach((lista, index)=>{
            const {descripcion, completado} = lista;
            const idx = `${index+1}`.green;
            if(completado!=null && estado == true){
                console.log(`${idx} ${descripcion} :: ${(completado==null)? 'Pendiente'.red : 'Completado'.green}`);
            }else if(completado==null && estado == false){
                console.log(`${idx} ${descripcion} :: ${(completado==null)? 'Pendiente'.red : 'Completado'.green}`);
            }
        })
    }
    borrarTareas(id){
        if(this.listado[id]){
            delete this.listado[id];
        }
    }
    completarTareas(tareas){
        tareas.forEach(id=>{
            const tarea = this.listado[id];
            if(!tarea.completado){
                tarea.completado = true;
            }
        })
        this.listarArr.forEach(tarea=>{
            if(!tareas.includes(tarea.id)){
                this.listado[tarea.id].completado = null;
            }
        })
    }
}

module.exports =Tareas;