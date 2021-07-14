const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list', 
    name : 'opcion',
    message: '¿Que desea hacer?',
    choices: [
        {
            value: '1',
            name : `${'1'.green} Crear una tarea`
        },
        {
            value: '2',
            name : `${'2'.green} Listar tareas`
        },
        {
            value: '3',
            name : `${'3'.green} Listar tareas completadas`
        },
        {
            value: '4',
            name : `${'4'.green} Listar tareas pendientes`
        },
        {
            value: '5',
            name : `${'5'.green} Completar tareas`
        },
        {
            value: '6',
            name : `${'6'.green} Borrar tarea`
        },
        {
            value: '0',
            name : `${'0'.green} Salir`
        },
    ]
}]


const inquirerMenu = async()=>{
    console.clear();
    console.log('====================================');
    console.log('   Seleccione una opción'.green);
    console.log('====================================\n');

    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
}

const enter = [{
    type: 'input', 
    name : 'enter',
    message: `Precione ${'Enter'.green} para continuar`,
}];
const pausa = async ()=>{
    // console.clear();
    const stop = await inquirer.prompt(enter);
    return stop;
}
const recibirInput = async (message)=>{
    const questions = [
        {
            type : 'input',
            name : 'desc',
            message,
            validate(value){
                if(value.length === 0 ){
                    return 'Ingresa un valor';
                }
                return true;
            }
        }
    ]
    const {desc} = await inquirer.prompt(questions);
    return desc
}
const inquierListadoTEliminar = async(tareas)=>{
    console.clear()
    const choices = tareas.map((tarea, i)=>{
        const idx = `${i+1}. `.green
        const {id, descripcion} = tarea
        return {
            value: id,
            name: `${idx} ${descripcion}`
        }
    });
    choices.unshift({
        value: '0',
        name: `${'0. '.green} Cancelar`
    })
    const preguntas = [{
        type: 'list', 
        name : 'id',
        message: '¿Que desea hacer?',
        choices
    }];
    const {id} = await inquirer.prompt(preguntas);
    return id
}
const confirmacion = async (message)=>{
    const pregunta= [{
        type: 'confirm',
        name: 'ok',
        message
    }];
    const {ok} =await inquirer.prompt(pregunta);
    return ok;
}
const inquierCompletarTareas = async(tareas)=>{
    console.clear()
    const choices = tareas.map((tarea, i)=>{
        const idx = `${i+1}. `.green
        const {id, descripcion, completado} = tarea
        return {
            value: id,
            name: `${idx} ${descripcion}`,
            checked: (completado)? true: false
        }
    }); 
    const preguntas = [{
        type: 'checkbox', 
        name : 'ids',
        message: 'Selecciones las tareas a completar',
        choices
    }];
    const {ids} = await inquirer.prompt(preguntas);
    return ids
}
module.exports = {
    inquirerMenu,
    pausa,
    recibirInput,
    inquierListadoTEliminar,
    confirmacion,
    inquierCompletarTareas
}

