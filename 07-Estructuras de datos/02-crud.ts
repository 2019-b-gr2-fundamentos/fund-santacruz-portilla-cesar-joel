import * as prompts from 'prompts';

function main(){
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito(){

    //paradigma de programacion

    //SINCRONO VS ASINCRONO
    console.log('Inicio');

    const promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'puedes darme tu edad?'
    })
    console.log(promesaEdad);
    promesaEdad
    .then(//ok
        (datos)=>{
            console.log('datos',datos); //AQUI PUEDO SEGUIR

            /////
            const promesaNombre = prompts({
                type: 'text',
                name: 'nombre',
                message: 'puedes darme tu nombre?'
            });
            promesaNombre
                .then(
                    (datosNombre)=>{
                        console.log('Nombre',datosNombre);
                    }
                )
                .catch(
                    (errorNombre)=>{
                        console.log('Error',errorNombre)
                    }
                );
            /////
        }
    )
    .catch(
        (error)=>{
            console.log('Error',error)
        }
    );
    console.log('Fin');
}
main();