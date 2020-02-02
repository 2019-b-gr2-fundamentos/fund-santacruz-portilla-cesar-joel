"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _02_filter_1 = require("./02-filter");
var _03_every_1 = require("./03-every");
var _04_some_1 = require("./04-some");
var _05_forEach_1 = require("./05-forEach");
function main() {
    var arregloEstudiantes /*:any*/ = [
        { id: 1, nombre: "Juan", nota: 7 },
        { id: 2, nombre: "Pepe", nota: 6 },
        { id: 3, nombre: "jose", nota: 4 },
        { id: 4, nombre: "kaki", nota: 9 },
        { id: 5, nombre: "karen", nota: 9 }
    ];
    //operadro -> forEach
    //enviamos -> nada
    //recivimos -> nada
    ////////////////////////////////////////////////////////////////
    var respuestaForEach = arregloEstudiantes.forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota = valorActual.nota * 2);
        // valorActual.nota20 = valorActual.nota*2
    });
    console.log(arregloEstudiantes);
    console.log(respuestaForEach);
    //map -> transforma el arreglo (mutar el arr)
    //enviamos -> valorActual
    //recibimos nuevo arr con valores modificados
    ////////////////////////////////////////////////////////////////
    var respuestaMap = arregloEstudiantes.map(function (valorActual, indice, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log(respuestaMap);
    /////////////////////////////////////////////////////////////////////
    var respuestaFilter = arregloEstudiantes.filter(function (valorActual) {
        var busqueda = !valorActual.nombre.search("jose");
        return busqueda;
    });
    console.log(respuestaFilter);
    ////////////////////////////////////////////////////////////////////////
    var respuestaSome = arregloEstudiantes.some(function (valorActual) {
        var condicion = valorActual.nota < 7;
        return condicion;
    });
    console.log(respuestaSome);
    ////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    var respuestaEvery = arregloEstudiantes.every(function (valorActual) {
        var condicion = valorActual.nota < 7;
        return condicion;
    });
    console.log(respuestaEvery);
    ////////////////////////////////////////////////////////////////////
    /*
    reduce -> devuelve un valor con el calculo aplicado
    enviamos -> calculo
    devuelve -> valor
    */
    var respuestaReduce = arregloEstudiantes.reduce(function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0);
    console.log(respuestaReduce);
    var respuestaFilterNuestro = _02_filter_1.filter(arregloEstudiantes, function (valorActual, i, arr) {
        console.log(valorActual);
        console.log(i);
        console.log(arr);
        return valorActual.nota >= 7;
    });
    console.log(respuestaFilterNuestro);
    var respuestaEveryNuestro = _03_every_1.every(arregloEstudiantes, function (valorActual, i, arr) {
        console.log(valorActual);
        console.log(i);
        console.log(arr);
        return valorActual.nota > 1;
    });
    console.log(respuestaEveryNuestro);
    var respuestaSomeNuestro = _04_some_1.some(arregloEstudiantes, function (valorActual, i, arr) {
        console.log(valorActual);
        console.log(i);
        console.log(arr);
        return valorActual.nota > 10;
    });
    console.log(respuestaSomeNuestro);
    _05_forEach_1.forEach(arregloEstudiantes, function (valorActual, indice, arreglo) {
        console.log(valorActual.nota = valorActual.nota * 2);
    });
    console.log(arregloEstudiantes);
}
main();
