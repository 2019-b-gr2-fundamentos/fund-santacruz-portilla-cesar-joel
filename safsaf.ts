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
            }
    }
}