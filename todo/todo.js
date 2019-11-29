const fs = require('fs')

let listadotodo = [];

const guardaDB = () => {
    let data = JSON.stringify(listadotodo);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar el archivo', err);
    });
}
const getListado = () => {
    cargadatos();
    return listadotodo;
}
const cargadatos = () => {
    try {
        listadotodo = require('../db/data.json');
    } catch (error) {
        listadotodo = [];
    }


}

const crear = (descripcion) => {
    cargadatos();
    let porhacer = {
        descripcion,
        completado: false
    }

    listadotodo.push(porhacer);

    guardaDB();

    return porhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargadatos();

    let index = listadotodo.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadotodo[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}
const borrar = (descripcion) => {
    cargadatos();

    let nuevolistado = listadotodo.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevolistado.length !== listadotodo.length) {
        listadotodo = nuevolistado;
        guardaDB();
        return true;
    } else {
        return false;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}