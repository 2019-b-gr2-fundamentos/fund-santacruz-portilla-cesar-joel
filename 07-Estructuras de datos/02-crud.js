var prompts = require('prompts');
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    //paradigma de programacion
    //SINCRONO VS ASINCRONO
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(function (datos) {
        console.log('datos', datos); //AQUI PUEDO SEGUIR
        /////
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'puedes darme tu nombre?'
        });
        promesaNombre
            .then(function (datosNombre) {
            console.log('Nombre', datosNombre);
        })
            .catch(function (errorNombre) {
            console.log('Error', errorNombre);
        });
        /////
    })
        .catch(function (error) {
        console.log('Error', error);
    });
    console.log('Fin');
}
main();
