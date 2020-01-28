"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _02_leer_archivo_1 = require("./02-leer-archivo");
var _03_escribir_archivo_1 = require("./03-escribir-archivo");
var prompts = require("prompts");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var contenidoArchivo, arregloCargadoDeArchivo, contador, minimoId, arregloEstudiantes, arregloPreguntas, opcion, _a, respuestaEstudianteUno, nuevoRegistroUno, respuestaEstudianteDos, nuevoRegistroDos, idABuscar_1, indiceEncontrado, nombreAEditar, buscar_1, estudianteEncontrado, arregloTexto;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    contenidoArchivo = _02_leer_archivo_1.leerArchivo('./ejemplo.txt');
                    console.log('contenidoArchivo', contenidoArchivo);
                    try {
                        arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
                    }
                    catch (error) {
                        arregloCargadoDeArchivo = [
                            { "id": 1, "nombre": "mazda", "modelo": "bt", "anio": 2012, "origen": "japon", "precio": 21330 },
                            { "id": 2, "nombre": "toyota", "modelo": "hylux", "anio": 2014, "origen": "japon", "precio": 28000 },
                            { "id": 3, "nombre": "kia", "modelo": "rio", "anio": 2017, "origen": "korea", "precio": 16330 },
                            { "id": 4, "nombre": "chevy", "modelo": "aveo", "anio": 2004, "origen": "us", "precio": 15000 },
                        ];
                        console.error('Error parseando archivo');
                    }
                    contador = 3;
                    minimoId = -1;
                    arregloCargadoDeArchivo
                        .forEach(// NO ENVIA NADA y NO DEVUELVE NADA
                    // ITERAR
                    function (valorActual) {
                        var idActual = valorActual.id;
                        if (idActual > minimoId) {
                            minimoId = idActual;
                        }
                    });
                    minimoId = minimoId + 1;
                    contador = minimoId;
                    arregloEstudiantes = arregloCargadoDeArchivo;
                    arregloPreguntas = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa tu marca'
                        },
                        {
                            type: 'text',
                            name: 'modelo',
                            message: 'Ingresa tu modelo'
                        },
                        {
                            type: 'number',
                            name: 'anio',
                            message: 'Ingresa tu anio'
                        },
                        {
                            type: 'text',
                            name: 'origen',
                            message: 'Ingresa tu origen'
                        },
                        {
                            type: 'number',
                            name: 'precio',
                            message: 'Ingresa tu precio'
                        }
                    ];
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    console.log("\nESCOGA UNA LA ACCION QUE DESEA REALIZAR\n");
                    console.log("1.anadir dos datos");
                    console.log("2.Editar el carro");
                    console.log("3.buscar un carro");
                    console.log("4.Agregar una pelicula");
                    console.log("5.Salir\n");
                    return [4 /*yield*/, funcionOpcion()];
                case 1:
                    opcion = _b.sent();
                    _a = opcion;
                    switch (_a) {
                        case 1: return [3 /*break*/, 2];
                        case 2: return [3 /*break*/, 6];
                        case 3: return [3 /*break*/, 10];
                    }
                    return [3 /*break*/, 13];
                case 2: return [4 /*yield*/, prompts(arregloPreguntas)];
                case 3:
                    respuestaEstudianteUno = _b.sent();
                    nuevoRegistroUno = {
                        id: contador,
                        nombre: respuestaEstudianteUno.nombre,
                        modelo: respuestaEstudianteUno.modelo,
                        anio: respuestaEstudianteUno.anio,
                        origen: respuestaEstudianteUno.origen,
                        precio: respuestaEstudianteUno.precio
                    };
                    contador = contador + 1;
                    arregloEstudiantes.push(nuevoRegistroUno);
                    return [4 /*yield*/, prompts(arregloPreguntas)];
                case 4:
                    respuestaEstudianteDos = _b.sent();
                    nuevoRegistroDos = {
                        id: contador,
                        nombre: respuestaEstudianteDos.nombre,
                        modelo: respuestaEstudianteDos.modelo,
                        anio: respuestaEstudianteDos.anio,
                        origen: respuestaEstudianteDos.origen,
                        precio: respuestaEstudianteDos.precio
                    };
                    contador = contador + 1;
                    arregloEstudiantes.push(nuevoRegistroDos);
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    console.log('contenidoArchivo', contenidoArchivo);
                    return [4 /*yield*/, funcionOpcion()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 6:
                    console.log('Cual carro quieres Editar?');
                    console.log(arregloEstudiantes);
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el ID del registro a Editar'
                        })];
                case 7:
                    idABuscar_1 = _b.sent();
                    indiceEncontrado = arregloEstudiantes.findIndex(// return CONDICION ->
                    function (valorActual) {
                        return valorActual.id == idABuscar_1.id; // Nos devuelve el INDICE
                    } // Si encuentra nos devuelve el indice
                    // No encuentra
                    );
                    console.log('Indice encontrado:', indiceEncontrado);
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa el nuevo nombre'
                        })];
                case 8:
                    nombreAEditar = _b.sent();
                    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
                    console.log(arregloEstudiantes);
                    return [4 /*yield*/, funcionOpcion()];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 10: return [4 /*yield*/, prompts({
                        type: 'text',
                        name: 'nombre',
                        message: 'Buscar por ID o por NOMBRE'
                    }, {
                        type: 'number',
                        name: 'id',
                        message: 'Buscar por ID o por NOMBRE'
                    })];
                case 11:
                    buscar_1 = _b.sent();
                    estudianteEncontrado = arregloEstudiantes.find(function (valorActual) {
                        return valorActual.nombre || valorActual.id == buscar_1.nombre && buscar_1.id;
                    });
                    console.log(estudianteEncontrado);
                    return [4 /*yield*/, funcionOpcion()];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 14];
                case 13:
                    console.log("\nHASTA LUEGO!!");
                    return [3 /*break*/, 14];
                case 14:
                    arregloTexto = JSON.stringify(arregloEstudiantes);
                    // JSON.stringify -> Convierte objeto o arreglo en memoria
                    //                -> a texto
                    console.log(arregloTexto);
                    _03_escribir_archivo_1.escribirArchivo('./ejemplo.txt', arregloTexto);
                    return [2 /*return*/];
            }
        });
    });
}
/////////////////////////////////////
function funcionOpcion() {
    return __awaiter(this, void 0, void 0, function () {
        var opcion, opcionRespuesta;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    opcion = {
                        type: 'number',
                        name: 'numeroDeOpcion',
                        message: '¿Que desea realizar?',
                        validate: function (value) { return (value < 0 || value > 5) ? "ESCOGER SOLO DE ENTRE LAS OPCIONES QUE APARECEN EN PANTALLA" : true; }
                    };
                    return [4 /*yield*/, prompts(opcion)];
                case 1:
                    opcionRespuesta = _a.sent();
                    return [2 /*return*/, opcionRespuesta.numeroDeOpcion];
            }
        });
    });
}
////////////////////////////////////
main().then().catch();
/*
const modeloAEditar = await prompts(
                    {
                    type: 'text',
                    name: 'modelo',
                    message: 'Ingresa el nuevo nombre'
                }
                )
                const anioAEditar = await prompts(
                    {
                    type: 'number',
                    name: 'anio',
                    message: 'Ingresa el nuevo nombre'
                }
                )
                const origenAEditar = await prompts(
                    {
                    type: 'text',
                    name: 'origen',
                    message: 'Ingresa el nuevo nombre'
                }
                )
                const precioAEditar = await prompts(
                    {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingresa el nuevo nombre'
                }
                )
                arregloEstudiantes[indiceEncontrado].modelo = modeloAEditar.modelo;
                arregloEstudiantes[indiceEncontrado].anio   = anioAEditar.anio;
                arregloEstudiantes[indiceEncontrado].origen = origenAEditar.origen;
                arregloEstudiantes[indiceEncontrado].precio = precioAEditar.precio;
*/
/*
const respuestaEstudianteTres = await prompts(arregloPreguntas);
const nuevoRegistroTres = {
    id: contador,
    nombre: respuestaEstudianteTres.nombre,
    modelo: respuestaEstudianteTres.modelo,
    anio: respuestaEstudianteTres.anio,
    origen: respuestaEstudianteTres.origen,
    precio: respuestaEstudianteTres.precio
};
contador = contador + 1;
arregloEstudiantes.push(nuevoRegistroTres);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const respuestaEstudianteCuatro = await prompts(arregloPreguntas);
const nuevoRegistroCuatro = {
    id: contador,
    nombre: respuestaEstudianteCuatro.nombre,
    modelo: respuestaEstudianteCuatro.modelo,
    anio: respuestaEstudianteCuatro.anio,
    origen: respuestaEstudianteCuatro.origen,
    precio: respuestaEstudianteCuatro.precio
};
contador = contador + 1;
arregloEstudiantes.push(nuevoRegistroCuatro);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const respuestaEstudianteCinco = await prompts(arregloPreguntas);
const nuevoRegistroCinco = {
    id: contador,
    nombre: respuestaEstudianteCinco.nombre,
    modelo: respuestaEstudianteCinco.modelo,
    anio: respuestaEstudianteCinco.anio,
    origen: respuestaEstudianteCinco.origen,
    precio: respuestaEstudianteCinco.precio
};
contador = contador + 1;
arregloEstudiantes.push(nuevoRegistroCinco);
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const respuestaEstudianteSeis = await prompts(arregloPreguntas);
const nuevoRegistroSeis = {
    id: contador,
    nombre: respuestaEstudianteSeis.nombre,
    modelo: respuestaEstudianteSeis.modelo,
    anio: respuestaEstudianteSeis.anio,
    origen: respuestaEstudianteSeis.origen,
    precio: respuestaEstudianteSeis.precio
};
contador = contador + 1;
arregloEstudiantes.push(nuevoRegistroSeis);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/ 
