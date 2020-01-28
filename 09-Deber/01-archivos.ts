import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
import { opcionInterface } from "./interfaces/opcion.interface";
async function main(){


    const contenidoArchivo = leerArchivo('./ejemplo.txt');
    console.log('contenidoArchivo', contenidoArchivo);
    let arregloCargadoDeArchivo; // undefined
    try{
        arregloCargadoDeArchivo = JSON.parse(contenidoArchivo);
    } catch(error){
        arregloCargadoDeArchivo = [
            {"id":1,"nombre":"mazda","modelo":"bt","anio":2012,"origen":"japon","precio":21330},
            {"id":2,"nombre":"toyota","modelo":"hylux","anio":2014,"origen":"japon","precio":28000},
            {"id":3,"nombre":"kia","modelo":"rio","anio":2017,"origen":"korea","precio":16330},
            {"id":4,"nombre":"chevy","modelo":"aveo","anio":2004,"origen":"us","precio":15000},
        ];
        console.error('Error parseando archivo');
    }

    let contador = 3;

    // OPERADORES
    let minimoId = -1;
    arregloCargadoDeArchivo
        .forEach( // NO ENVIA NADA y NO DEVUELVE NADA
            // ITERAR
            function(valorActual){
                const idActual = valorActual.id;
                if(idActual > minimoId){
                    minimoId = idActual
                }
            }
        );
    minimoId = minimoId + 1;
    contador = minimoId;

            const arregloEstudiantes: Estudiante[] = arregloCargadoDeArchivo;
            const arregloPreguntas = [
                { 
                    type: 'text',
                    name: 'nombre',
                    message: 'Ingresa tu marca'
                }
                { 
                    type: 'text',
                    name: 'modelo',
                    message: 'Ingresa tu modelo'
                }
                { 
                    type: 'number',
                    name: 'anio',
                    message: 'Ingresa tu anio'
                }
                { 
                    type: 'text',
                    name: 'origen',
                    message: 'Ingresa tu origen'
                }
                { 
                    type: 'number',
                    name: 'precio',
                    message: 'Ingresa tu precio'
                }
            ];
        
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        console.log("\nESCOGA UNA LA ACCION QUE DESEA REALIZAR\n");
        console.log("1.anadir dos datos");
        console.log("2.1 Editar el carro(nombre)");
        console.log("2.2 Editar el carro(modelo)");
        console.log("2.3 Editar el carro(anio)");
        console.log("2.4 Editar el carro(origen)");
        console.log("2.5 Editar el carro(precio)");
        console.log("3.buscar un carro");
        console.log("4.Agregar una pelicula");
        console.log("5.Salir\n");
        const opcion = await funcionOpcion();
        switch(opcion)
        {
            case 1:
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            const respuestaEstudianteUno = await prompts(arregloPreguntas);
            const nuevoRegistroUno = {
                id: contador,
                nombre: respuestaEstudianteUno.nombre,
                modelo: respuestaEstudianteUno.modelo,
                anio: respuestaEstudianteUno.anio,
                origen: respuestaEstudianteUno.origen,
                precio: respuestaEstudianteUno.precio
            };
            contador = contador + 1;
            arregloEstudiantes.push(nuevoRegistroUno);
        
        
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
            const respuestaEstudianteDos = await prompts(arregloPreguntas);
            const nuevoRegistroDos = {
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
            await funcionOpcion();
            break;
            /*
            await buscarPelicula(directorio);
                await esperear();
                await menu(directorio);
                break;
                */
            case 2.1:
                console.log('Cual carro quieres Editar?');
                console.log(arregloEstudiantes);


                const idABuscar = await prompts(
                    {
                        type: 'number',
                        name: 'id',
                        message: 'Ingresa el ID del registro a Editar'
                }
                )
                const indiceEncontrado = arregloEstudiantes.findIndex( // return CONDICION ->
                    function (valorActual,){
                        return valorActual.id == idABuscar.id; // Nos devuelve el INDICE
                    } // Si encuentra nos devuelve el indice
                    // No encuentra
                )
                console.log('Indice encontrado:', indiceEncontrado);

                const nombreAEditar = await prompts(
                    {
                    type: 'text',
                    name: 'nombre',
                    message: 'Ingresa el nuevo nombre'
                }
                )
                arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
                console.log(arregloEstudiantes);
                await funcionOpcion();
                break;
            case 2.2:
                console.log('Cual carro quieres Editar?');
                console.log(arregloEstudiantes);


                const idABuscar2 = await prompts(
                    {
                        type: 'number',
                        name: 'id',
                        message: 'Ingresa el ID del registro a Editar'
                }
                )
                const indiceEncontrado2 = arregloEstudiantes.findIndex( // return CONDICION ->
                    function (valorActual,){
                        return valorActual.id == idABuscar2.id; // Nos devuelve el INDICE
                    } // Si encuentra nos devuelve el indice
                    // No encuentra
                )
                console.log('Indice encontrado:', indiceEncontrado2);
                
                const modeloAEditar = await prompts(
                    {
                    type: 'text',
                    name: 'modelo',
                    message: 'Ingresa el nuevo modelo'
                }
                )
                arregloEstudiantes[indiceEncontrado2].modelo = modeloAEditar.modelo;
                console.log(arregloEstudiantes);
                await funcionOpcion();
                break;
            case 2.3:
                console.log('Cual carro quieres Editar?');
                console.log(arregloEstudiantes);


                const idABuscar3 = await prompts(
                    {
                        type: 'number',
                        name: 'id',
                        message: 'Ingresa el ID del registro a Editar'
                }
                )
                const indiceEncontrado3 = arregloEstudiantes.findIndex( // return CONDICION ->
                    function (valorActual,){
                        return valorActual.id == idABuscar3.id; // Nos devuelve el INDICE
                    } // Si encuentra nos devuelve el indice
                    // No encuentra
                )
                console.log('Indice encontrado:', indiceEncontrado3);
                
                const anioAEditar = await prompts(
                    {
                    type: 'text',
                    name: 'anio',
                    message: 'Ingresa el nuevo anio'
                }
                )
                arregloEstudiantes[indiceEncontrado3].anio = anioAEditar.anio;
                console.log(arregloEstudiantes);
                await funcionOpcion();
                break;
            case 2.4:
                console.log('Cual carro quieres Editar?');
                console.log(arregloEstudiantes);


                const idABuscar4 = await prompts(
                    {
                        type: 'number',
                        name: 'id',
                        message: 'Ingresa el ID del registro a Editar'
                }
                )
                const indiceEncontrado4 = arregloEstudiantes.findIndex( // return CONDICION ->
                    function (valorActual,){
                        return valorActual.id == idABuscar4.id; // Nos devuelve el INDICE
                    } // Si encuentra nos devuelve el indice
                    // No encuentra
                )
                console.log('Indice encontrado:', indiceEncontrado4);
                
                const origenAEditar = await prompts(
                    {
                    type: 'text',
                    name: 'origen',
                    message: 'Ingresa el nuevo origen'
                }
                )
                arregloEstudiantes[indiceEncontrado4].origen = origenAEditar.origen;
                console.log(arregloEstudiantes);
                await funcionOpcion();
                break;
            case 2.5:
                console.log('Cual carro quieres Editar?');
                console.log(arregloEstudiantes);


                const idABuscar5 = await prompts(
                    {
                        type: 'number',
                        name: 'id',
                        message: 'Ingresa el ID del registro a Editar'
                }
                )
                const indiceEncontrado5 = arregloEstudiantes.findIndex( // return CONDICION ->
                    function (valorActual,){
                        return valorActual.id == idABuscar5.id; // Nos devuelve el INDICE
                    } // Si encuentra nos devuelve el indice
                    // No encuentra
                )
                console.log('Indice encontrado:', indiceEncontrado5);
                
                const precioAEditar = await prompts(
                    {
                    type: 'text',
                    name: 'precio',
                    message: 'Ingresa el nuevo precio'
                }
                )
                arregloEstudiantes[indiceEncontrado5].precio = precioAEditar.precio;
                console.log(arregloEstudiantes);
                await funcionOpcion();
                break;
            case 3:
                const buscar = await prompts({
                    type: 'text',
                    name: 'nombre',
                    message: 'Buscar por ID o por NOMBRE'
                }
                {
                    type: 'number',
                    name: 'id',
                    message: 'Buscar por ID o por NOMBRE'
                }
                );
                const estudianteEncontrado = arregloEstudiantes.find(
                            function(valorActual){
                                return valorActual.nombre||valorActual.id == buscar.nombre && buscar.id ;
                            }
                        );
                console.log(estudianteEncontrado);
                await funcionOpcion();
                break;
                /*
                directorio = await eliminarPelicula(directorio);
                console.log("\nLas peliculas actuales son:\n");
                await imprimirPeliculas(directorio);
                await esperear()
                await menu(directorio);
                break;
                */
            case 4:
                console.log(arregloEstudiantes);
                await funcionOpcion();
            default:
                console.log("\nHASTA LUEGO!!");
                break;
        }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const arregloTexto = JSON.stringify(arregloEstudiantes);
    // JSON.stringify -> Convierte objeto o arreglo en memoria
    //                -> a texto
    console.log(arregloTexto);
    escribirArchivo(
        './ejemplo.txt',
        arregloTexto
        );
}


/////////////////////////////////////
async function funcionOpcion()
{
    const opcion = 
    {
        type:'number',
        name:'numeroDeOpcion',
        message:'¿Que desea realizar?',
        validate: value => (value < 0 || value > 5) ? `ESCOGER SOLO DE ENTRE LAS OPCIONES QUE APARECEN EN PANTALLA`:true
    }
    const opcionRespuesta:opcionInterface = await prompts(opcion);
    return opcionRespuesta.numeroDeOpcion;
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