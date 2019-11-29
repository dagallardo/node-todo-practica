const argv = require('./config/yargs').argv;
const TODO = require('./todo/todo');
const color = require('colors');
console.log("Aqui voy");
console.log(argv);

let comando = argv._[0];

console.log(comando);

switch (comando) {
    case 'crear':
        console.log('Creando');
        let tarea = TODO.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = TODO.getListado();
        console.log("======== TODOs =========".green);
        for (let tarea of listado) {
            console.log(tarea.descripcion + ":" + color.red(tarea.completado));
        }
        console.log("======== >>><<<< ========".green);


        break;
    case 'actualizar':
        TODO.actualizar(argv.descripcion, argv.completado);
        break;
    case 'borrar':
        let borrar = TODO.borrar(argv.descripcion);
        if (borrar)
            console.log("La tarea fue borrada");
        else
            console.log("La tarea no se borro");
        break;
    default:
        console.log("El comando no es reconocido");
}