
export function map(arreglo: any[],
    funcion: (valorActual:any, indice?:number,arreglo?:any[]) => any[]): any{
        let funMap = [];
        for( let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
    }

}
