function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function borracho(numUno, numDos) {
    return numUno / 150 * numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt('Selecciona una operacion:\n "suma-1",\n "resta-2",\n "multiplicacion-3",\n "division-4",\n "terminamos-5"\n "%borracho-6"');
    var esSuma = operacion == "suma" ||
        operacion == "1" ||
        operacion == "suma-1";
    var esResta = operacion == "resta" ||
        operacion == "2" ||
        operacion == "resta-2";
    var esMultiplicacion = operacion == "multiplicacion" ||
        operacion == "3" ||
        operacion == "multiplicacion-3";
    var esDivision = operacion == "division" ||
        operacion == "4" ||
        operacion == "division-4";
    var seTermino = operacion == "terminamos" ||
        operacion == "5" ||
        operacion == "terminamos-5";
    var esBorracho = operacion == "esta borracho" ||
        operacion == "6" ||
        operacion == "esta borracho-6";
    var estaValida = esSuma || esResta || esDivision || esMultiplicacion || esBorracho;
    if (estaValida) {
        var numUno = +prompt("Numero 1");
        var resultado = 0;
        var numDos = +prompt("Numero 2");
        if (esSuma) {
            resultado = sumar(numUno, numDos);
        }
        else {
            if (esResta) {
                resultado = restar(numUno, numDos);
            }
            else {
                if (esMultiplicacion) {
                    resultado = multiplicar(numUno, numDos);
                }
                else {
                    if (esDivision) {
                        resultado = dividir(numUno, numDos);
                    }
                    else {
                        if (esBorracho) {
                            resultado = borracho(numUno, numDos);
                        }
                    }
                }
            }
        }
        alert("este es el resultado de su operacion" + resultado);
        calculadora();
    }
    else {
        if (seTermino) {
            alert("Adios");
        }
        else {
            calculadora();
        }
    }
}
/*
1. seleccionar la operacion
2.1 la seleccion no es valida
    2.1.1 vuelve a seleccionar la operacion
2.2 la seleccion es valida
    2.2.1 ingresar primer numero
    2.2.2 ingresar segundo numero
    2.2.3 ejecutar la operacion
    */
