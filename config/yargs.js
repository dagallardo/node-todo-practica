const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require("yargs")
    .command('crear', 'Crea un todo', { descripcion })
    .command('borrar', 'Borra una tarea', { descripcion })
    .command('listar', 'Muestra todas las tareas')
    .command('actualizar', 'Cambia el status de una tarea', { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
}