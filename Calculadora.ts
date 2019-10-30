const SUMA = prompt("ingrese operacion ")
if SUMA == suma;
const numeroUnoString = prompt("ingresa numero 1");
const numeroDosString = prompt("ingresa numero 2");
const numeroUno = Number(numeroUnoString);
const numeroDos = Number(numeroDosString);
console.log(numeroUno + numeroDos);

const calculo = "multiplicar";// sumir restar multiplicar dividir
switch(calculo){
    case 'sumar'://1

        break;
    case 'restar'://2

        break;
    case 'multitplicar'://3

        break;
    case 'dividir':

        break;
    default:

}

/*const edad = prompt("ingrese la edad");// sumir restar multiplicar dividir
switch(edad){
    case edad > 0 && edad < 6:
            console.log("guagua")
        break;
    case edad > 6 && edad < 18:
            console.log("guambra")

        break;
    case edad > 18 && edad < 65:
    console.log("longo")

        break;
    case edad > 65:
            console.log("ruku"):

        break;
    default:

}
*/
const edadstring = prompt("ingrese la edad");
const edad = Number(edadstring)
if (edad > 0 && edad < 6){
    console.log("guagua");
} else {
        if (edad > 6 && edad < 18){
        console.log("guambra");
    } else{
            if (edad > 18 && edad < 65){
            console.log("longo");
        } else {
                if (edad > 65){
                console.log("ruku");
            } else {
                console.log("que miedo");
                }


//6guagua
//18 guambra
//65 ruku