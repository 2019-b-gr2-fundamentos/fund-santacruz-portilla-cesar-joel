const dieta = prompt(" Ingrese el alimento que va a consumir ");
const operacion01 = "vegetales";
const operacion02 = "carnes";
const operacion03 = "lacteos";
if (dieta == operacion01) {
    const cantidadString = prompt(" Ingrese cantidad gr ");
    const cantidad = Number(cantidadString);
    if (cantidad >= 400) {
    console.log("Bueno para la salud");
    } else {
        console.log("debes consumir mas")
    }
} else {
    if (dieta == operacion02) {
        const cantidadString = prompt(" Ingrese cantidad gr ");
        const cantidad = Number(cantidadString);
        if (cantidad >= 200 && cantidad <= 700 ) {
            console.log("Bueno para la salud");
            } else {
                    if (dieta == operacion03) {
                        const cantidadString = prompt(" Ingrese cantidad gr ");
                        const cantidad = Number(cantidadString);
                        if (cantidad <= 100 ) {
                            console.log("Bueno para la salud");
                            } else {
                                console.log("no es necesario")
                            } 
                    }
                }
            }
        }