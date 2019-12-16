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
    let longitudActualMax = 0; // auxiliar
    let longitudActualMin = -1; //auxiliar
    for(let i = 0; i < matrizUno.length; i++){
        const elementoActual = matrizUno[i]; //arreglo
        const longitudActual = elementoActual.length; //segunda dimension
        if(longitudActualMax < longitudActual){
            longitudActualMax = longitudActual;
        }
        if(longitudActualMin == -1 {
            longitudActualMin = longitudActual;
        }else{
            if(longitudActual < longitudActualMin){
                longitudActualMin = longitudActual
            }
        }
    }
    return false;
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