const arregloMatriz = [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9],
    1
]
function compararMatriz(
    matrizUno: number [][],
    matrizDos: number [][]
): boolean {
    return true;
}

function obtenerPrimeraDimension(matrizUno: number [][]): number | false{//use | para anadir mas tipos
    //validaciones
    const esValido = verificarTodosLosElementosDeUnArregloSonarreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo;
    }else{
        return false;
    }
}

function obtenerSegundaDimension(matrizUno: number [][]): number | false{
    const esValido = verificarTodosLosElementosDeUnArregloSonarreglo(matrizUno);
    /*
    let longitudActualMax = 0;
    
    */
    for(let i = 0; i + 1 < matrizUno.length; i++){
        const elementoActual = matrizUno[i];
        elementoActual.length;
        const siguienteElemento = matrizUno[i +1]
        siguienteElemento.length;
        if(elementoActual.length == siguienteElemento.length){
            return elementoActual.length;
        }else{
            return false;
        }
    }
}
//usar funcion para ver si es arreglo

function verificarTodosLosElementosDeUnArregloSonarreglo (arreglo: any[]
    ):boolean{
    for(let i = 0 ; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf; // truty
        if(!esUnArreglo){
            alert("No es un arreglo");
            return false;
        }
    }
    return true;
}