require('colors');

const mostrarMensaje =()=>{
    console.clear();
    const promesa = new Promise((resolve, reject)=>{
        console.log('====================================');
        console.log('   Seleccione una opción'.green);
        console.log('====================================\n');
        console.log(`${'1'.green} Crear una tarea`);
        console.log(`${'2'.green} Listar una tarea`);
        console.log(`${'3'.green} Listar tareas completadas`);
        console.log(`${'4'.green} Listar tareas pendientes`);
        console.log(`${'5'.green} Completar tareas`);
        console.log(`${'6'.green} borrar tarea `);
        console.log(`${'0'.green} Salir\n`);
    
        const readline = require('readline').createInterface({ //requerimos el paquete que nos ayuda a recibir valores por consola
            input : process.stdin, //recibe por consola
            output : process.stdout // muestra por consola
        });
    
        readline.question('Ingrese una opción: ', (opt)=>{ //genero una instancia de tipo pregunta y capturo lo que el usuario ingrese
            readline.close();
            resolve(opt);
        });
    });
    return promesa;
}
const pausar = ()=>{
    const promesa = new Promise(resolve=>{
        const readline = require('readline').createInterface({ //requerimos el paquete que nos ayuda a recibir valores por consola
            input : process.stdin, //recibe por consola
            output : process.stdout // muestra por consola
        });
    
        readline.question(`\nPrecione ${'Enter'.green} para continuar\n`, (opt)=>{ //genero una instancia de tipo pregunta y capturo lo que el usuario ingrese
            readline.close();
            resolve();
        });
    });
    return promesa;
}

module.exports = {
    mostrarMensaje,
    pausar  
}