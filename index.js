require('colors');
const { inquirerMenu, pausa, recibirInput, inquierListadoTEliminar,
         confirmacion, inquierCompletarTareas } = require('./helpers/inquier');
const {guardarDb, leerDb} = require('./helpers/guardarArchivo');
const { mostrarMensaje, pausar } = require('./helpers/mensajes');
const Tarea = require('./models/Tarea');
const Tareas = require('./models/Tareas');


const main = async()=>{
    let opt = '';
    const tareas = new Tareas();
    const leerBd = leerDb();
    if(leerBd){
        tareas.cargarTareas(leerBd);
    }
    do {
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                const recibir = await recibirInput('Tarea:');
                tareas.crearTarea(recibir);
                break;
            case '2':
               tareas.listarTodas();
                break;
            case '3':
               tareas.listarTareasCompletadas(true);
                break;
            case '4':
               tareas.listarTareasCompletadas(false);
                break;
            case '5':
                const completadas = await inquierCompletarTareas(tareas.listarArr);
                tareas.completarTareas(completadas);
                break;
            case '6':
                const id = await inquierListadoTEliminar(tareas.listarArr);
                if(id !== '0'){
                const confirma = await confirmacion('Estas seguro de eliminar la tarea?');
                    if(confirma){
                        tareas.borrarTareas(id);
                        console.log('Tarea eliminada correctamente');
                    }
                }
                break;
        }

        guardarDb(tareas.listarArr);
        if(opt!=='0') await pausa();
        
    }while(opt !== '0');
  
    // pausar();
}

main();